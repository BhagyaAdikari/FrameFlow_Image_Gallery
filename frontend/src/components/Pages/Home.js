import React from "react";
import "./Home.css";
import imageSrc from "./../img/woman-art-exhibition.jpg";

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="home-header">
               
                <img
                               className="w-50 h-30 lg:h-25"
                               src={imageSrc}
                               alt="Logo" 
                             />

                <div className="header-content">
                    <h1><br></br>Discover Stunning Images</h1>
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
