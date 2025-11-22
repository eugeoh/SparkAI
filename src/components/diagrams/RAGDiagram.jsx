import React, { useState, useEffect } from 'react';
import './Diagrams.css';

const RAGDiagram = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 5);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="diagram-container rag-diagram">
            <div className={`rag-step ${step === 0 ? 'active' : ''}`}>
                <div className="icon">👤</div>
                <div className="label">User Query</div>
            </div>
            <div className="arrow">→</div>

            <div className={`rag-step ${step === 1 ? 'active' : ''}`}>
                <div className="icon">🔍</div>
                <div className="label">Retrieve</div>
            </div>
            <div className="arrow">→</div>

            <div className={`rag-step ${step === 2 ? 'active' : ''}`}>
                <div className="icon">📚</div>
                <div className="label">Knowledge Base</div>
            </div>
            <div className="arrow">→</div>

            <div className={`rag-step ${step === 3 ? 'active' : ''}`}>
                <div className="icon">➕</div>
                <div className="label">Augment Prompt</div>
            </div>
            <div className="arrow">→</div>

            <div className={`rag-step ${step === 4 ? 'active' : ''}`}>
                <div className="icon">🤖</div>
                <div className="label">LLM Generation</div>
            </div>
        </div>
    );
};

export default RAGDiagram;
