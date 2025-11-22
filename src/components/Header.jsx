import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">SparkAI</Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/mindmap" className="nav-highlight">Mindmap 🗺️</Link>
        <a href="https://github.com/google-deepmind" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </header>
  );
};

export default Header;
