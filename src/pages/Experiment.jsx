import React from 'react';
import { useParams } from 'react-router-dom';
import './Concept.css'; // Reuse concept styling

const experimentsData = {
    'figma-make': {
        title: 'Figma Make',
        description: 'Design to Code, Automated.',
        content: (
            <>
                <p>Figma Make bridges the gap between design and development. It allows you to generate production-ready code directly from your Figma designs.</p>
                <h3>Key Features</h3>
                <ul>
                    <li><strong>Direct Translation:</strong> Convert vector designs into React, Vue, or HTML/CSS.</li>
                    <li><strong>Design Systems:</strong> Respects your existing tokens and components.</li>
                    <li><strong>Iterative:</strong> Update your design and regenerate code without losing logic.</li>
                </ul>
            </>
        ),
    },
    'claude-code': {
        title: 'Claude Code',
        description: 'Anthropic\'s Next-Gen Coding Assistant.',
        content: (
            <>
                <p>Claude Code leverages Anthropic's massive context window and reasoning capabilities to understand complex codebases.</p>
                <h3>Why Claude?</h3>
                <ul>
                    <li><strong>Large Context:</strong> Can read hundreds of files at once to understand system architecture.</li>
                    <li><strong>Reasoning:</strong> Excellent at explaining *why* a bug exists, not just fixing it.</li>
                    <li><strong>Safety:</strong> Designed to be helpful and harmless, reducing risky code suggestions.</li>
                </ul>
            </>
        ),
    },
    'roo-code': {
        title: 'Roo Code',
        description: 'Your AI Pair Programmer.',
        content: (
            <>
                <p>Roo Code is an AI assistant designed to sit right in your IDE and help you write better code, faster.</p>
                <h3>Capabilities</h3>
                <ul>
                    <li><strong>Autocomplete:</strong> Smart suggestions as you type.</li>
                    <li><strong>Refactoring:</strong> One-click code cleanup and optimization.</li>
                    <li><strong>Chat:</strong> Ask questions about your code without leaving the editor.</li>
                </ul>
            </>
        ),
    },
    'open-code': {
        title: 'Open Code',
        description: 'The Future is Open Source.',
        content: (
            <>
                <p>Open Code represents the ecosystem of open-source AI coding tools and models. It emphasizes transparency, community contribution, and accessibility.</p>
                <h3>The Movement</h3>
                <ul>
                    <li><strong>Open Models:</strong> Llama, Mistral, and others that you can run locally.</li>
                    <li><strong>Privacy:</strong> Keep your code on your machine, not on a cloud server.</li>
                    <li><strong>Customization:</strong> Fine-tune models on your specific codebase.</li>
                </ul>
            </>
        ),
    },
};

const Experiment = () => {
    const { id } = useParams();
    const experiment = experimentsData[id];

    if (!experiment) {
        return <div className="concept-page"><h1>Experiment not found</h1></div>;
    }

    return (
        <div className="concept-page">
            <h1>{experiment.title}</h1>
            <h2 style={{ color: 'var(--secondary-color)', marginTop: '-1rem', marginBottom: '2rem' }}>
                {experiment.description}
            </h2>

            <div className="concept-content">
                {experiment.content}

                <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                    <h3>Status: Experimental</h3>
                    <p>This tool is currently in the experimental phase. Features and availability may change.</p>
                </div>
            </div>
        </div>
    );
};

export default Experiment;
