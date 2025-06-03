import React from 'react';
import './styles/styles.css';

const CTASection = ({ 
  title = "Ready to Transform Your Workflow?",
  description = "Join creators who are already automating their processes with Nice Touch.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More"
}) => {
  return (
    <section className="cta-section">
      <div className="feature-container cta-container">
        <div className="feature-section-base cta-content">
          <div className="cta-text-content">
            <h2 className="cta-title">{title}</h2>
            <p className="cta-description">{description}</p>
            <div className="cta-buttons">
              <button className="cta-button cta-button-primary">
                {primaryButtonText}
              </button>
              <button className="cta-button cta-button-secondary">
                {secondaryButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
