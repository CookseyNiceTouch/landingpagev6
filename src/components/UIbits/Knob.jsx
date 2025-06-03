import React from 'react';
import './UIstyles.css';

/**
 * Knob Component - Figma-accurate 3D knob control
 * 
 * @param {Object} props - Component props
 * @param {number} props.size - Size of the knob in pixels (default: 90)
 * @param {number} props.indicatorAngle - Angle of the indicator in degrees (default: 0, top position)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 */
const Knob = ({ 
  size = 90, 
  indicatorAngle = 0, 
  className = '', 
  style = {},
  ...props 
}) => {
  const knobStyle = {
    width: `${size}px`,
    height: `${size}px`,
    ...style
  };

  // For angle 0 (top position), use CSS positioning for perfect centering
  // For other angles, calculate position based on angle
  let indicatorStyle = {};
  
  if (indicatorAngle === 0) {
    // Use CSS positioning (top: 12px, left: 50%, transform: translateX(-50%))
    // No inline styles needed - CSS handles it
  } else {
    // Calculate position for non-zero angles
    const knobRadius = size / 2;
    const indicatorDistance = knobRadius - 18; // Distance from center to indicator
    const angleInRadians = (indicatorAngle - 90) * (Math.PI / 180); // -90 to start from top
    
    const indicatorX = knobRadius + indicatorDistance * Math.cos(angleInRadians) - 1.84; // Half indicator width
    const indicatorY = knobRadius + indicatorDistance * Math.sin(angleInRadians) - 4.21; // Half indicator height
    
    indicatorStyle = {
      left: `${indicatorX}px`,
      top: `${indicatorY}px`,
      transform: 'none' // Override CSS transform for angled positions
    };
  }

  return (
    <div 
      className={`ui-knob ${className}`} 
      style={knobStyle}
      {...props}
    >
      <div className="ui-knob-base">
        <div 
          className="ui-knob-indicator" 
          style={indicatorStyle}
        />
      </div>
    </div>
  );
};

export default Knob; 