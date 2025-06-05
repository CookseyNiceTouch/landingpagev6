import React from 'react';
import './styles/styles.css';
import SquareButton from './UIbits/sqbutton';

const CTASection = ({ 
  title = "Ready to Transform Your Workflow?",
  description = "Join creators who are already automating their processes with Nice Touch.",
  buttonText = "Get Started",
  onButtonClick
}) => {
  return (
    <section className="cta-section">
      <div className="feature-container cta-container">
        <div className="feature-section-base cta-content">
          <div className="cta-text-content">
            <h2 className="cta-title">{title}</h2>
            <p className="cta-description">{description}</p>
          </div>
          
          {/* Button section similar to topbar */}
          <div className="cta-button-section">
            <SquareButton 
              onClick={onButtonClick}
              hue={38}
              saturation={100}
              lightness={45}
              className="cta-square-button"
            />
            <span className="cta-button-text">{buttonText}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
