import React from 'react';
import './UIstyles.css';

/**
 * Hole Component - Figma-accurate 3D inset hole/dot
 * 
 * @param {Object} props - Component props
 * @param {number} props.size - Size of the hole in pixels (default: 12)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 */
const Hole = ({ 
  size = 12, 
  className = '', 
  style = {},
  ...props 
}) => {
  const holeStyle = {
    width: `${size}px`,
    height: `${size}px`,
    ...style
  };

  return (
    <div 
      className={`ui-hole ${className}`} 
      style={holeStyle}
      {...props}
    >
      <div className="ui-hole-circle" />
    </div>
  );
};

export default Hole; 