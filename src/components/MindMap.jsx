import React, { useCallback } from 'react';
import { ReactFlow, Background, Controls, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useNavigate } from 'react-router-dom';
import './MindMap.css';

const initialNodes = [
    // Core
    { id: 'ai', position: { x: 400, y: 0 }, data: { label: 'Artificial Intelligence' }, type: 'input', className: 'mindmap-node root-node' },
    { id: 'ml', position: { x: 400, y: 100 }, data: { label: 'Machine Learning' }, className: 'mindmap-node' },
    { id: 'dl', position: { x: 400, y: 200 }, data: { label: 'Deep Learning' }, className: 'mindmap-node' },

    // Branches
    { id: 'genai', position: { x: 200, y: 300 }, data: { label: 'Generative AI' }, className: 'mindmap-node' },
    { id: 'nlp', position: { x: 600, y: 300 }, data: { label: 'NLP' }, className: 'mindmap-node' },

    // LLM Cluster
    { id: 'llms', position: { x: 400, y: 400 }, data: { label: 'Large Language Models' }, className: 'mindmap-node' },

    // LLM Concepts
    { id: 'tokens', position: { x: 200, y: 500 }, data: { label: 'Tokens' }, className: 'mindmap-node leaf-node' },
    { id: 'temperature', position: { x: 400, y: 500 }, data: { label: 'Temperature' }, className: 'mindmap-node leaf-node' },
    { id: 'condensing', position: { x: 600, y: 500 }, data: { label: 'Condensing' }, className: 'mindmap-node leaf-node' },

    // Advanced Techniques
    { id: 'rag', position: { x: 250, y: 600 }, data: { label: 'RAG' }, className: 'mindmap-node leaf-node' },
    { id: 'prompting', position: { x: 550, y: 600 }, data: { label: 'Context Engineering' }, className: 'mindmap-node leaf-node' },

    // AI Categories
    { id: 'engineering', position: { x: -50, y: 400 }, data: { label: 'AI Powered Engineering' }, className: 'mindmap-node root-node' },
    { id: 'design', position: { x: 200, y: 400 }, data: { label: 'AI Powered Design' }, className: 'mindmap-node root-node' },

    // Engineering Tools
    { id: 'antigravity', position: { x: -150, y: 500 }, data: { label: 'Antigravity 🚀' }, className: 'mindmap-node leaf-node' },
    { id: 'claude', position: { x: -50, y: 500 }, data: { label: 'Claude Code' }, className: 'mindmap-node leaf-node' },
    { id: 'roo', position: { x: 50, y: 500 }, data: { label: 'Roo Code' }, className: 'mindmap-node leaf-node' },
    { id: 'open', position: { x: -50, y: 600 }, data: { label: 'Open Code' }, className: 'mindmap-node leaf-node' },

    // Design Tools
    { id: 'figma', position: { x: 200, y: 500 }, data: { label: 'Figma Make' }, className: 'mindmap-node leaf-node' },

    // Ethics Branch
    { id: 'ethics', position: { x: 800, y: 0 }, data: { label: 'Ethics & Ecosystem' }, className: 'mindmap-node root-node' },
    { id: 'responsible', position: { x: 800, y: 100 }, data: { label: 'Responsible AI' }, className: 'mindmap-node leaf-node' },
    { id: 'opensource', position: { x: 950, y: 100 }, data: { label: 'Open Source vs Private' }, className: 'mindmap-node leaf-node' },
];

const initialEdges = [
    // Core Flow
    { id: 'e1-2', source: 'ai', target: 'ml', animated: true },
    { id: 'e2-3', source: 'ml', target: 'dl', animated: true },
    { id: 'e3-4', source: 'dl', target: 'genai', animated: true },
    { id: 'e3-5', source: 'dl', target: 'nlp', animated: true },

    // Ethics Flow
    { id: 'ai-eth', source: 'ai', target: 'ethics', animated: true, style: { stroke: '#ec4899' } },
    { id: 'eth-resp', source: 'ethics', target: 'responsible', animated: true },
    { id: 'eth-open', source: 'ethics', target: 'opensource', animated: true },

    // Convergence to LLMs
    { id: 'e4-6', source: 'genai', target: 'llms', animated: true },
    { id: 'e5-6', source: 'nlp', target: 'llms', animated: true },

    // LLM Details
    { id: 'e6-tok', source: 'llms', target: 'tokens', animated: true },
    { id: 'e6-temp', source: 'llms', target: 'temperature', animated: true },
    { id: 'e6-cond', source: 'llms', target: 'condensing', animated: true },
    { id: 'e6-rag', source: 'llms', target: 'rag', animated: true },
    { id: 'e6-ctx', source: 'llms', target: 'prompting', animated: true },

    // Category Flow
    { id: 'gen-eng', source: 'genai', target: 'engineering', animated: true, style: { stroke: '#ec4899' } },
    { id: 'gen-des', source: 'genai', target: 'design', animated: true, style: { stroke: '#ec4899' } },

    // Engineering Tools
    { id: 'eng-anti', source: 'engineering', target: 'antigravity', animated: true },
    { id: 'eng-claude', source: 'engineering', target: 'claude', animated: true },
    { id: 'eng-roo', source: 'engineering', target: 'roo', animated: true },
    { id: 'eng-open', source: 'engineering', target: 'open', animated: true },

    // Design Tools
    { id: 'des-figma', source: 'design', target: 'figma', animated: true },
];

const MindMap = () => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const navigate = useNavigate();

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const onNodeClick = (event, node) => {
        const conceptMap = {
            ai: '/concepts/intro',
            ml: '/concepts/ml',
            dl: '/concepts/nn',
            genai: '/concepts/genai',
            llms: '/concepts/llms',
            rag: '/concepts/rag',
            prompting: '/concepts/context',
            nlp: '/concepts/nlp',
            tokens: '/concepts/tokens',
            temperature: '/concepts/temperature',
            condensing: '/concepts/condensing',
            antigravity: '/experiments/antigravity',
            figma: '/experiments/figma-make',
            claude: '/experiments/claude-code',
            roo: '/experiments/roo-code',
            open: '/experiments/open-code',
            responsible: '/concepts/responsible-ai',
            opensource: '/concepts/open-source'
        };

        const path = conceptMap[node.id];
        if (path) {
            navigate(path);
        }
    };

    return (
        <div className="mindmap-container">
            <h2>Explore the AI Universe</h2>
            <p>Click on any node to learn more about the concept.</p>
            <div style={{ width: '100%', height: '600px' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={onNodeClick}
                    fitView
                >
                    <Controls />
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
            </div>
        </div>
    );
};

export default MindMap;
