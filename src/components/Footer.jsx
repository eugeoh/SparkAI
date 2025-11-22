import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} AI Explained. Built for educational purposes.</p>
        </footer>
    );
};

export default Footer;
