import React from 'react';
import './bigbutton.css';

/**
 * BigButton Component - Figma-accurate 3D button with HSL control
 * 
 * @param {Object} props - Component props
 * @param {function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @param {number} props.hue - Hue value (0-360) for color theming, defaults to 38 (orange)
 * @param {number} props.saturation - Base saturation value (0-100) for color intensity, defaults to 100
 * @param {number} props.lightness - Base lightness value (0-100) for brightness, defaults to 51
 */
const BigButton = ({ 
  onClick,
  className = '',
  style = {},
  hue = 38, // Default orange hue
  saturation = 100, // Default full saturation
  lightness = 51, // Default medium lightness
  ...props 
}) => {
  // Calculate relative saturations based on base saturation
  const baseSat = Math.max(0, Math.min(100, saturation)); // Clamp between 0-100
  const lowSat = baseSat === 0 ? 0 : Math.max(0, baseSat - 25); // For darker elements
  const medSat = baseSat; // For medium elements
  const highSat = baseSat === 0 ? 0 : Math.min(100, baseSat + 30); // For brighter elements
  const edgeSat = baseSat === 0 ? 0 : Math.max(20, baseSat - 30); // For edge elements

  // Calculate relative lightness based on base lightness
  const baseLit = Math.max(0, Math.min(100, lightness)); // Clamp between 0-100
  const darkLit = Math.max(10, baseLit - 28); // For dark elements
  const medLit = baseLit; // For medium elements
  const lightLit = Math.min(95, baseLit + 34); // For light elements
  const brightLit = Math.min(90, baseLit + 22); // For bright elements
  const hoverLit = Math.min(95, baseLit + 40); // For hover states

  // Calculate hue-shifted colors while maintaining relationships
  const buttonStyle = {
    '--bb-hue': hue,
    // Middle ring (::before) colors
    '--bb-middle-dark': `hsl(${hue}, ${baseSat}%, ${Math.max(10, baseLit - 8)}%)`, // #db9600 equivalent
    '--bb-middle-medium': `hsl(${hue}, ${baseSat}%, ${medLit}%)`, // #ffae00 equivalent
    '--bb-middle-light': `hsl(${hue}, ${edgeSat}%, ${lightLit}%)`, // #ffe5ac equivalent
    // Inner ring (::after) colors
    '--bb-inner-light': `hsl(${hue}, ${edgeSat}%, ${Math.min(92, baseLit + 32)}%)`, // #ffe3a7 equivalent
    '--bb-inner-medium': `hsl(${hue}, ${baseSat}%, ${medLit}%)`, // #ffae00 equivalent
    '--bb-inner-dark': `hsl(${hue}, ${Math.min(100, baseSat + 10)}%, ${darkLit}%)`, // #a87300 equivalent
    // Glow color
    '--bb-glow-color': `hsl(${hue}, ${Math.min(100, baseSat + 20)}%, ${Math.min(95, baseLit + 35)}%)`, // #ffe9ba equivalent
    // Hover states - brighten middle ring
    '--bb-hover-dark': `hsl(${hue}, ${baseSat}%, ${Math.min(85, baseLit + 19)}%)`, // #ffb300 equivalent
    '--bb-hover-medium': `hsl(${hue}, ${highSat}%, ${Math.min(80, baseLit + 25)}%)`, // #ffc233 equivalent
    '--bb-hover-light': `hsl(${hue}, ${Math.max(20, baseSat - 10)}%, ${Math.min(98, baseLit + 45)}%)`, // #fff2cc equivalent
    // Hover states - brighten inner ring
    '--bb-hover-after-light': `hsl(${hue}, ${Math.max(30, baseSat - 5)}%, ${Math.min(95, baseLit + 38)}%)`, // #ffedbb equivalent
    '--bb-hover-after-medium': `hsl(${hue}, ${highSat}%, ${Math.min(80, baseLit + 25)}%)`, // #ffc233 equivalent
    '--bb-hover-after-dark': `hsl(${hue}, ${baseSat}%, ${Math.max(15, baseLit - 5)}%)`, // #cc9500 equivalent
    ...style
  };

  return (
    <button 
      className={`ui-big-button ${className}`}
      onClick={onClick}
      style={buttonStyle}
      {...props}
    >
      <div className="ui-big-button-base">
        {/* No content - just the button shape */}
      </div>
    </button>
  );
};

export default BigButton;
