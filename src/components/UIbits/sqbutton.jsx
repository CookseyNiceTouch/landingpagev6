import React from 'react';
import './sqbutton.css';

/**
 * SquareButton Component - Figma-accurate layered square button
 * 
 * @param {Object} props - Component props
 * @param {function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 */
const SquareButton = ({ 
  onClick,
  className = '',
  style = {},
  ...props 
}) => {
  return (
    <button 
      className={`sq-button ${className}`}
      onClick={onClick}
      style={style}
      {...props}
    >
      <div className="sq-button-hole">
        <div className="sq-button-base">
          <div className="sq-button-circle">
            {/* Layered button structure */}
          </div>
        </div>
      </div>
    </button>
  );
};

export default SquareButton;
