import React from 'react';
import { useParams } from 'react-router-dom';
import './Concept.css';
import Quiz from '../components/Quiz';

import MLDiagram from '../components/diagrams/MLDiagram';
import NNDiagram from '../components/diagrams/NNDiagram';
import TransformerDiagram from '../components/diagrams/TransformerDiagram';
import RAGDiagram from '../components/diagrams/RAGDiagram';
import ContextDiagram from '../components/diagrams/ContextDiagram';

const conceptsData = {
    intro: {
        title: 'Introduction to AI',
        content: (
            <>
                <p>Artificial Intelligence (AI) isn't just sci-fi robots; it's the engineering discipline of building systems that can reason, learn, and act autonomously. It's about creating software that doesn't just follow rules, but <em>figures them out</em>.</p>
                <h3>Why it Matters for You</h3>
                <p>For future engineers and entrepreneurs, AI is a toolkit. It allows you to solve complex problems—from diagnosing diseases to optimizing energy grids—at a scale previously impossible. Imagine building a startup that uses AI to detect wildfires from satellite imagery, or an app that helps dyslexic students read better.</p>
                <h3>Core Pillars</h3>
                <ul>
                    <li><strong>Perception:</strong> Understanding the world (Computer Vision, Audio). Example: FaceID on your phone.</li>
                    <li><strong>Reasoning:</strong> Solving problems and making decisions. Example: AlphaGo beating human champions.</li>
                    <li><strong>Action:</strong> Robotics and autonomous agents. Example: Self-driving cars navigating traffic.</li>
                </ul>
            </>
        ),
    },
    ml: {
        title: 'Machine Learning',
        content: (
            <>
                <p>Machine Learning (ML) is the engine of modern AI. Instead of writing thousands of `if-then` rules, engineers feed data into algorithms that "learn" the rules themselves.</p>
                <MLDiagram />
                <h3>Real-World Impact</h3>
                <p>ML powers the recommendation engines on Netflix, the fraud detection in your bank app, and the route optimization in Google Maps. It's everywhere.</p>
                <h3>Types of Learning</h3>
                <ul>
                    <li><strong>Supervised Learning:</strong> Like a teacher with an answer key. You show the AI pictures of cats and dogs labeled "cat" or "dog".</li>
                    <li><strong>Unsupervised Learning:</strong> Like exploring a new city without a map. The AI finds patterns on its own (e.g., grouping similar customers).</li>
                    <li><strong>Reinforcement Learning:</strong> Like training a dog with treats. The AI learns by trial and error to maximize a reward (e.g., winning a game).</li>
                </ul>
            </>
        ),
    },
    nn: {
        title: 'Neural Networks & Deep Learning',
        content: (
            <>
                <p>Deep Learning is a powerful type of ML inspired by the human brain. It uses "Neural Networks"—layers of mathematical functions—to find patterns in messy data like images or audio.</p>
                <NNDiagram />
                <h3>The "Deep" in Deep Learning</h3>
                <p>It refers to the number of layers. More layers = ability to understand more complex features (e.g., edges -&gt; shapes -&gt; faces). Each node (neuron) takes inputs, applies a weight (importance), and passes it on if it's strong enough.</p>
            </>
        ),
    },
    genai: {
        title: 'Generative AI',
        content: (
            <>
                <p>Generative AI moves beyond analyzing data to <strong>creating</strong> it. It can write code, design logos, or compose music. It learns the underlying structure of the data to generate new, similar instances.</p>
                <h3>For Entrepreneurs</h3>
                <p>GenAI drastically lowers the barrier to entry for building products. You can prototype apps, generate marketing copy, and create assets in minutes. It's a force multiplier for creativity.</p>
            </>
        ),
        quiz: {
            question: "How can an entrepreneur best use Generative AI?",
            options: ["To replace all human employees", "To rapidly prototype and create content", "To store customer databases"],
            answer: "To rapidly prototype and create content"
        }
    },
    nlp: {
        title: 'Natural Language Processing (NLP)',
        content: (
            <>
                <p>NLP is the bridge between computers and human language. It allows machines to read, decipher, understand, and make sense of human languages.</p>
                <p><strong>Applications:</strong> Translation apps, voice assistants (Siri/Alexa), and sentiment analysis for brand monitoring. Before LLMs, NLP relied on simpler statistical methods.</p>
            </>
        ),
    },
    llms: {
        title: 'Large Language Models (LLMs)',
        content: (
            <>
                <p>LLMs are the "brains" behind tools like ChatGPT. They are massive neural networks trained on the internet's text to predict the next word in a sequence.</p>
                <h3>How They Work (Simplified)</h3>
                <TransformerDiagram />
                <p>They don't just "memorize"; they learn the statistical structure of language and reasoning patterns. They map words to numbers (vectors) in a multi-dimensional space where similar concepts are close together.</p>
                <h3>The Transformer Architecture</h3>
                <p>The key breakthrough was the "Attention Mechanism," which allows the model to focus on relevant parts of a sentence regardless of distance (e.g., connecting "Alice" to "her" across a long paragraph). This parallel processing capability allowed models to scale massively.</p>
            </>
        ),
    },
    rag: {
        title: 'Retrieval-Augmented Generation (RAG)',
        content: (
            <>
                <p>LLMs can hallucinate (make things up). RAG fixes this by giving the model a "textbook" to look up answers. It combines the reasoning power of an LLM with the factual accuracy of a database.</p>
                <RAGDiagram />
                <h3>The Engineering Flow</h3>
                <ol>
                    <li><strong>Retrieve:</strong> Search a trusted database for relevant info based on the user's query.</li>
                    <li><strong>Augment:</strong> Paste that info into the prompt as context.</li>
                    <li><strong>Generate:</strong> Ask the LLM to answer using <em>only</em> that info.</li>
                </ol>
                <p><strong>Use Case:</strong> A customer support bot that answers questions using only your company's latest PDF manuals, ensuring it doesn't invent policies.</p>
            </>
        ),
    },
    context: {
        title: 'Context Engineering',
        content: (
            <>
                <p>Context Engineering is the holistic practice of designing the entire "input environment" for an LLM to ensure high-quality, reliable outputs. It's more than just writing a prompt; it's about architecting the information flow.</p>
                <ContextDiagram />
                <h3>The Four Pillars of Context</h3>
                <ul>
                    <li><strong>1. Base Model Knowledge:</strong> The static knowledge the model was trained on (e.g., Wikipedia up to 2023). It's the foundation but can be outdated.</li>
                    <li><strong>2. RAG (Retrieval-Augmented Generation):</strong> Injecting fresh, proprietary, or specific data (e.g., your company's emails) into the context window.</li>
                    <li><strong>3. System Prompts:</strong> The "God Mode" instructions that define the AI's persona, constraints, and tone (e.g., "You are a strict code reviewer. Only output Python code.").</li>
                    <li><strong>4. User Instructions:</strong> The specific task at hand (e.g., "Debug this function").</li>
                </ul>
                <h3>Why This Matters</h3>
                <p>In production applications, you don't just "ask" the AI. You engineer a pipeline where you retrieve the right data (RAG), set the right guardrails (System Prompt), and frame the user's request to guarantee a successful result.</p>
            </>
        ),
    },
    tokens: {
        title: 'Tokens',
        content: (
            <>
                <p>LLMs don't read words like we do; they read "tokens". A token can be a word, part of a word, or even a space.</p>
                <h3>The Math of Language</h3>
                <p>Roughly, 1,000 tokens ≈ 750 words. When you pay for API access (like OpenAI's), you pay per million tokens.</p>
                <h3>Context Window</h3>
                <p>Every model has a limit on how much it can "remember" at once, called the Context Window (e.g., 128k tokens). If you exceed this, the model forgets the beginning of the conversation.</p>
            </>
        ),
    },
    temperature: {
        title: 'Temperature',
        content: (
            <>
                <p>Temperature is a setting (usually 0.0 to 1.0) that controls the "randomness" of the AI's output.</p>
                <ul>
                    <li><strong>Low Temperature (0.0 - 0.3):</strong> Deterministic, focused, and precise. Good for code generation or factual answers.</li>
                    <li><strong>High Temperature (0.7 - 1.0):</strong> Creative, diverse, and unpredictable. Good for brainstorming, poetry, or storytelling.</li>
                </ul>
                <p>Think of it as a slider between "Accountant" and "Artist".</p>
            </>
        ),
    },
    condensing: {
        title: 'Condensing & Compression',
        content: (
            <>
                <p>Since context windows are limited and expensive, "condensing" is the art of shrinking information without losing meaning.</p>
                <h3>Techniques</h3>
                <ul>
                    <li><strong>Summarization:</strong> Asking an LLM to summarize a long document before passing it to the next step.</li>
                    <li><strong>Vector Embeddings:</strong> Converting text into numbers (vectors) to search for only the most relevant snippets (used in RAG).</li>
                    <li><strong>Prompt Optimization:</strong> Removing fluff words to save tokens.</li>
                </ul>
            </>
        ),
    },
    'responsible-ai': {
        title: 'Responsible AI',
        content: (
            <>
                <p>As AI becomes more powerful, we must ensure it is used safely and ethically. This isn't just about "do no harm"; it's about active alignment with human values.</p>
                <h3>Key Challenges</h3>
                <ul>
                    <li><strong>Bias:</strong> AI models learn from internet data, which contains human prejudices. We must engineer systems to detect and mitigate this.</li>
                    <li><strong>Hallucinations:</strong> Models can confidently state falsehoods. Verification mechanisms (like RAG) are critical.</li>
                    <li><strong>Safety & Alignment:</strong> Ensuring the AI refuses harmful instructions (e.g., "How to build a bomb") while remaining helpful.</li>
                </ul>
            </>
        ),
    },
    'open-source': {
        title: 'Open Source vs Private Models',
        content: (
            <>
                <p>The AI landscape is divided between closed, proprietary models (like GPT-4) and open weights models (like Llama 3).</p>
                <h3>The Trade-offs</h3>
                <ul>
                    <li><strong>Private (Closed):</strong> Generally smarter (SOTA), managed infrastructure, easy to use API. <em>Cons:</em> Data privacy risks, cost, vendor lock-in.</li>
                    <li><strong>Open Source:</strong> Full control, run locally (privacy), customizable (fine-tuning). <em>Cons:</em> Requires hardware/engineering to host, slightly less capable than top closed models.</li>
                </ul>
                <h3>The Future</h3>
                <p>The gap is closing. For many engineering tasks, a fine-tuned open model can outperform a general-purpose closed model.</p>
            </>
        ),
    },
};

const Concept = () => {
    const { id } = useParams();
    const concept = conceptsData[id];

    if (!concept) {
        return <div>Concept not found</div>;
    }

    return (
        <div className="concept-page">
            <h1>{concept.title}</h1>
            <div className="concept-content">
                {concept.content}
            </div>
            {concept.quiz && (
                <Quiz
                    question={concept.quiz.question}
                    options={concept.quiz.options}
                    answer={concept.quiz.answer}
                />
            )}
        </div>
    );
};

export default Concept;
