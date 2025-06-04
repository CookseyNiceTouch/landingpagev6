import React from 'react';
import './UIstyles.css';

/**
 * BigButton Component - Figma-accurate 3D button
 * 
 * @param {Object} props - Component props
 * @param {function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 */
const BigButton = ({ 
  onClick,
  className = '',
  style = {},
  ...props 
}) => {
  return (
    <button 
      className={`ui-big-button ${className}`}
      {...props}
    >
      <div className="ui-big-button-base">
        {/* No content - just the button shape */}
      </div>
    </button>
  );
};

export default BigButton;
