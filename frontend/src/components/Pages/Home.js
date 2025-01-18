import React from "react";
import "./Home.css";

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <nav className="navbar">
                    <div className="logo">Image<span>Gallery</span></div>
                    <ul className="nav-links">
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-content">
                    <h1>Discover Stunning Images</h1>
                    <p>Your one-stop destination for high-quality images.</p>
                    <button 
                        className="cta-button"
                        onClick={() => alert("Explore coming soon!")}
                    >
                        Explore Now
                    </button>
                </div>
            </header>
            <footer className="home-footer">
                <p>&copy; 2025 Image Gallery. Crafted with ♥.</p>
            </footer>
        </div>
    );
};

export default HomePage;
