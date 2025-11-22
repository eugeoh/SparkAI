import React from 'react';
import './Diagrams.css';

const ContextDiagram = () => {
    return (
        <div className="diagram-container context-diagram">
            <div className="sources-row">
                <div className="source-group">
                    <div className="box source base-model">Base Model</div>
                    <div className="label">Pre-trained Knowledge</div>
                </div>
                <div className="plus">+</div>
                <div className="source-group">
                    <div className="box source rag">RAG Data</div>
                    <div className="label">External Info</div>
                </div>
                <div className="plus">+</div>
                <div className="source-group">
                    <div className="box source system">System Prompt</div>
                    <div className="label">Persona & Rules</div>
                </div>
                <div className="plus">+</div>
                <div className="source-group">
                    <div className="box source user">User Input</div>
                    <div className="label">Specific Task</div>
                </div>
            </div>

            <div className="arrow-down">↓</div>

            <div className="context-window">
                <div className="box window-box">
                    <span className="window-title">The Context Window</span>
                    <div className="window-content">
                        All inputs combined into a single prompt sequence
                    </div>
                </div>
            </div>

            <div className="arrow-down">↓</div>

            <div className="box output-box">
                Tailored AI Response
            </div>
        </div>
    );
};

export default ContextDiagram;
