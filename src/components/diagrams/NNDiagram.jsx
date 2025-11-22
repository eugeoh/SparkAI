import React, { useEffect, useState } from 'react';
import './Diagrams.css';

const NNDiagram = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="diagram-container nn-diagram">
            <div className="layer input-layer">
                <div className={`node ${active ? 'active' : ''}`}></div>
                <div className={`node ${active ? 'active' : ''}`}></div>
                <div className={`node ${active ? 'active' : ''}`}></div>
                <span className="label">Input</span>
            </div>

            <div className="connections">
                {/* Simplified connections visualization */}
                <svg width="100" height="150">
                    <line x1="0" y1="25" x2="100" y2="20" className={active ? 'active-line' : ''} />
                    <line x1="0" y1="25" x2="100" y2="60" className={active ? 'active-line delay-1' : ''} />
                    <line x1="0" y1="75" x2="100" y2="20" className={active ? 'active-line delay-2' : ''} />
                    <line x1="0" y1="75" x2="100" y2="100" className={active ? 'active-line' : ''} />
                    <line x1="0" y1="125" x2="100" y2="60" className={active ? 'active-line delay-1' : ''} />
                    <line x1="0" y1="125" x2="100" y2="100" className={active ? 'active-line delay-2' : ''} />
                </svg>
            </div>

            <div className="layer hidden-layer">
                <div className={`node ${active ? 'active delay-1' : ''}`}></div>
                <div className={`node ${active ? 'active delay-1' : ''}`}></div>
                <div className={`node ${active ? 'active delay-1' : ''}`}></div>
                <div className={`node ${active ? 'active delay-1' : ''}`}></div>
                <span className="label">Hidden</span>
            </div>

            <div className="connections">
                <svg width="100" height="150">
                    <line x1="0" y1="20" x2="100" y2="50" className={active ? 'active-line delay-2' : ''} />
                    <line x1="0" y1="60" x2="100" y2="50" className={active ? 'active-line delay-2' : ''} />
                    <line x1="0" y1="100" x2="100" y2="100" className={active ? 'active-line delay-2' : ''} />
                    <line x1="0" y1="130" x2="100" y2="100" className={active ? 'active-line delay-2' : ''} />
                </svg>
            </div>

            <div className="layer output-layer">
                <div className={`node ${active ? 'active delay-3' : ''}`}></div>
                <div className={`node ${active ? 'active delay-3' : ''}`}></div>
                <span className="label">Output</span>
            </div>
        </div>
    );
};

export default NNDiagram;
