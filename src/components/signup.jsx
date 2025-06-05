import React from 'react';
import './styles/styles.css';
import BigButton from './UIbits/bigbutton';

/**
 * SignupSection Component - Call-to-action section with signup button
 * 
 * @param {Object} props - Component props  
 * @param {function} props.onSignupClick - Callback for signup button click
 */
const SignupSection = ({ onSignupClick }) => {
  return (
    <section className="signup-section">
      <div className="feature-container signup-container">
        {/* Signup Content */}
        <div className="feature-section-base signup-content">
          <div className="signup-text-content">
            <h2 className="signup-title">Ready to get started?</h2>
            {/* Orange Button with HSL control */}
            <BigButton 
              onClick={onSignupClick}
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
