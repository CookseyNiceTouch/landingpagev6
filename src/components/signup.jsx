import React from 'react';
import './styles/styles.css';
import BigButton from './UIbits/bigbutton';

const SignupSection = () => {
  return (
    <section className="signup-section">
      <div className="feature-container signup-container">
        {/* Signup Content */}
        <div className="feature-section-base signup-content">
          <div className="signup-text-content">
            <h2 className="signup-title">Ready to get started?</h2>
            {/* Orange Button with HSL control */}
            <BigButton 
              onClick={() => console.log('Button clicked!')} 
              hue={38}
              saturation={100}
              lightness={51}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
