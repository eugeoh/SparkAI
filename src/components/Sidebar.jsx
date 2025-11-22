import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [expandedSections, setExpandedSections] = useState({
        core: true,
        advanced: true,
        ethics: true,
        tools: true,
    });

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                <h3 onClick={() => toggleSection('core')} className="clickable-header">
                    {expandedSections.core ? '▼' : '▶'} Core Concepts
                </h3>
                {expandedSections.core && (
                    <ul>
                        <li><Link to="/concepts/intro">Introduction to AI</Link></li>
                        <li><Link to="/concepts/ml">Machine Learning</Link></li>
                        <li><Link to="/concepts/nn">Neural Networks</Link></li>
                        <li><Link to="/concepts/nlp">Natural Language Processing</Link></li>
                    </ul>
                )}
            </div>

            <div className="sidebar-section">
                <h3 onClick={() => toggleSection('advanced')} className="clickable-header">
                    {expandedSections.advanced ? '▼' : '▶'} Advanced GenAI
                </h3>
                {expandedSections.advanced && (
                    <ul>
                        <li><Link to="/concepts/genai">Generative AI</Link></li>
                        <li><Link to="/concepts/llms">Large Language Models</Link></li>
                        <li><Link to="/concepts/rag">RAG</Link></li>
                        <li><Link to="/concepts/context">Context Engineering</Link></li>
                        <li><Link to="/concepts/tokens">Tokens</Link></li>
                        <li><Link to="/concepts/temperature">Temperature</Link></li>
                        <li><Link to="/concepts/condensing">Condensing</Link></li>
                    </ul>
                )}
            </div>

            <div className="sidebar-section">
                <h3 onClick={() => toggleSection('tools')} className="clickable-header">
                    {expandedSections.tools ? '▼' : '▶'} Tools
                </h3>
                {expandedSections.tools && (
                    <ul>

                        <li>
                            <Link to="/experiments/antigravity">Antigravity</Link>
                        </li>
                        <li><Link to="/experiments/figma-make">Figma Make</Link></li>
                        <li><Link to="/experiments/claude-code">Claude Code</Link></li>
                        <li><Link to="/experiments/roo-code">Roo Code</Link></li>
                        <li><Link to="/experiments/open-code">Open Code</Link></li>
                    </ul>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
