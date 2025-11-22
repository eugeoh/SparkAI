import React from 'react';
import './Diagrams.css';

const TransformerDiagram = () => {
    return (
        <div className="diagram-container transformer-diagram">
            <div className="t-step">
                <div className="box input-text">Input Text</div>
                <div className="arrow-down">↓</div>
            </div>

            <div className="t-step">
                <div className="box tokenization">Tokenization</div>
                <div className="sub-text">Break into parts</div>
                <div className="arrow-down">↓</div>
            </div>

            <div className="t-step attention-block">
                <div className="box attention">
                    <span className="glow-text">Self-Attention Mechanism</span>
                </div>
                <div className="sub-text">Understanding context & relationships</div>
                <div className="arrow-down">↓</div>
            </div>

            <div className="t-step">
                <div className="box feed-forward">Feed Forward Neural Network</div>
                <div className="arrow-down">↓</div>
            </div>

            <div className="t-step">
                <div className="box output-text">Output Probability</div>
            </div>
        </div>
    );
};

export default TransformerDiagram;
