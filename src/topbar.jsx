import React from 'react';
import SquareButton from './components/UIbits/sqbutton';
import './topbar.css';

/**
 * TopBar Component - Navigation/action bar with square buttons
 * 
 * Renders above the hero section with no background styling.
 * Contains two SquareButtons with accompanying text labels.
 * 
 * @param {Object} props - Component props
 * @param {function} props.onSignupClick - Callback for signup button click
 */
const TopBar = ({ onSignupClick }) => {
  return (
    <div className="topbar">
      <div className="topbar-content">
        {/* Left button with text */}
        <div className="topbar-item">
          <SquareButton 
            onClick={onSignupClick}
            hue={38}
            saturation={100}
            lightness={45}
          />
          <span className="topbar-text">Sign Up</span>
        </div>

        {/* Right button with text */}
        <div className="topbar-item">
          <SquareButton 
            onClick={() => window.open('https://discord.com/invite/jpp3mQUCYN', '_blank', 'noopener,noreferrer')}
            hue={270}
            saturation={0}
            lightness={95}
          />
          <span className="topbar-text">Join Us on Discord</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
