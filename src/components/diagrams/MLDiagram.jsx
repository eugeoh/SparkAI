import React from 'react';
import './Diagrams.css';

const MLDiagram = () => {
    return (
        <div className="diagram-container ml-diagram">
            <div className="flow-row">
                <h3>Traditional Programming</h3>
                <div className="flow-steps">
                    <div className="input-group">
                        <div className="box input">Rules</div>
                        <div className="plus">+</div>
                        <div className="box input">Data</div>
                    </div>
                    <div className="arrow">→</div>
                    <div className="box process">Classic Computer</div>
                    <div className="arrow">→</div>
                    <div className="box output">Answers</div>
                </div>
            </div>

            <div className="divider"></div>

            <div className="flow-row">
                <h3>Machine Learning</h3>
                <div className="flow-steps">
                    <div className="input-group">
                        <div className="box input">Answers</div>
                        <div className="plus">+</div>
                        <div className="box input">Data</div>
                    </div>
                    <div className="arrow">→</div>
                    <div className="box process ai">AI System</div>
                    <div className="arrow">→</div>
                    <div className="box output">Rules</div>
                </div>
            </div>
        </div>
    );
};

export default MLDiagram;
