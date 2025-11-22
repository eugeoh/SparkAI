import React from 'react';
import './Concept.css'; // Reuse concept styling

const AntigravityExperiment = () => {
    return (
        <div className="concept-page">
            <h1>Try Antigravity</h1>

            <div className="concept-content">
                <p>Antigravity is an advanced AI agent designed to revolutionize how you code. It's not just a chatbot; it's a pair programmer that understands your entire project.</p>

                <h3>Why Antigravity?</h3>
                <ul>
                    <li><strong>Context Awareness:</strong> Unlike standard chatbots, Antigravity sees your entire codebase. It knows your file structure, dependencies, and style guide.</li>
                    <li><strong>Autonomous Execution:</strong> It can run terminal commands, create files, and edit code directly. You plan, it executes.</li>
                    <li><strong>Rapid Prototyping:</strong> Turn an idea into a working app in minutes. Sketch a UI, describe a feature, and watch it build.</li>
                </ul>

                <h3>What to Try</h3>
                <p>Once you have Antigravity installed, try these prompts to see its power:</p>
                <ol>
                    <li><em>"Analyze my project structure and suggest 3 improvements."</em></li>
                    <li><em>"Create a new component called 'UserCard' with a modern dark theme."</em></li>
                    <li><em>"Refactor this function to be more efficient and add comments explaining the changes."</em></li>
                    <li><em>"Debug the error I'm seeing in the console."</em></li>
                </ol>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <a
                        href="https://chromewebstore.google.com/detail/antigravity-browser-exten/eeijfnjmjelap"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                        style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
                    >
                        Get Antigravity 🚀
                    </a>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                        Available on the Chrome Web Store
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AntigravityExperiment;
