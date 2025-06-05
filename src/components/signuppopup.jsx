import React, { useState } from 'react';
import './signuppopup.css';
import SquareButton from './UIbits/sqbutton';

/**
 * SignupPopup Component - Modal overlay for signup process
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether popup is visible
 * @param {function} props.onClose - Callback to close popup
 */
const SignupPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Don't render anything if not open
  if (!isOpen) return null;

  // Handle backdrop click to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  // Handle escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose?.();
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Submit to MailerLite
      const response = await fetch('https://assets.mailerlite.com/jsonp/1413791/forms/150028848308684795/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'fields[email]': email,
          'ml-submit': '1',
          'anticsrf': 'true'
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Discord click
  const handleDiscordClick = () => {
    window.open('https://discord.gg/jpp3mQUCYN', '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="signup-popup-backdrop"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="signup-popup-container">
        {/* Using same base classes as features */}
        <div className="feature-container signup-popup-wrapper">
          <div className="feature-section-base signup-popup-content">
            {/* Close button using SquareButton */}
            <div className="signup-popup-close-button">
              <SquareButton 
                onClick={onClose}
                hue={0}
                saturation={80}
                lightness={55}
                className="signup-close-square-button"
                aria-label="Close popup"
              />
            </div>
            
            {/* Signup Form Content */}
            <div className="signup-popup-body">
              {!isSuccess ? (
                <>
                  <h2 className="signup-popup-title">Join the Waitlist</h2>
                  <p className="signup-popup-description">
                    Be the first to experience Nice Touch when it launches. 
                    Get early access and exclusive updates.
                  </p>
                  
                  {/* Custom Signup Form */}
                  <form onSubmit={handleSubmit} className="popup-signup-form">
                    <div className="form-row">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="email-input"
                        required
                        disabled={isSubmitting}
                      />
                      <SquareButton 
                        onClick={handleSubmit}
                        hue={38}
                        saturation={100}
                        lightness={45}
                        className="signup-square-button"
                        disabled={isSubmitting || !email}
                      />
                    </div>
                  </form>

                  {/* Discord Button */}
                  {/* <div className="discord-section">
                    <p className="discord-text">Or join our community on discord:</p>
                    <SquareButton 
                      onClick={handleDiscordClick}
                      hue={270}
                      saturation={100}
                      lightness={50}
                      className="discord-square-button"
                    />
                  </div> */}
                </>
              ) : (
                <div className="success-message">
                  <h2 className="signup-popup-title">Thanks for signing up!</h2>
                  <p className="signup-popup-description">
                    We'll be in touch soon with updates and early access.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
