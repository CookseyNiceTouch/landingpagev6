import React from 'react';
import './styles/styles.css';

const HeroSection = ({ 
  title = "You Create",
  subtitle = "We Automate", 
  description = "Nice Touch, the OS for creators",
  imageSrc = "/hero-screenshot.png",
  imageAlt = "Hero Screenshot"
}) => {
  return (
    <section className="hero-section">
      <div className="feature-container hero-container">
        {/* Hero Content Section */}
        <div className="hero-content">
          {/* Text Section */}
          <div className="feature-section-base hero-text-section">
            <div className="hero-text-content">
              <h1 className="hero-title">
                <span className="hero-title-line">{title}</span>
                <span className="hero-title-line">{subtitle}</span>
              </h1>
              <p className="hero-description">{description}</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="hero-image">
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="feature-screenshot hero-screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
