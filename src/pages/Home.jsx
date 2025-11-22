import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <h1>Welcome to AI Explained</h1>
                <p>Demystifying Artificial Intelligence, one concept at a time.</p>
                <Link to="/concepts/intro" className="cta-button">Start Learning</Link>
            </div>
            <div className="features">
                <div className="feature-card">
                    <h2>Interactive Learning</h2>
                    <p>Explore AI concepts through interactive visualizations and simple explanations.</p>
                </div>
                <div className="feature-card">
                    <h2>Core Concepts</h2>
                    <p>From Machine Learning to Neural Networks, understand the building blocks of AI.</p>
                </div>
                <div className="feature-card">
                    <h2>Modern Topics</h2>
                    <p>Dive into Generative AI and Large Language Models.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
