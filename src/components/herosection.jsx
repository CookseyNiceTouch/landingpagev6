import React from 'react';
import './styles/styles.css';
import RiveAnimation from './RiveAnimation';

const HeroSection = ({ 
  title = "You Create",
  subtitle = "We Automate", 
  description = "Nice Touch, the OS for creators",
  artboard = "AI_edit_assistant",
  animationClass = "hero-animation"
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
            <RiveAnimation 
              artboard={artboard} 
              className={animationClass}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
