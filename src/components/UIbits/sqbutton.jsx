import React from 'react';
import './sqbutton.css';

/**
 * SquareButton Component - Figma-accurate layered square button
 * 
 * @param {Object} props - Component props
 * @param {function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @param {number} props.hue - Hue value (0-360) for color theming, defaults to 38 (orange)
 * @param {number} props.saturation - Base saturation value (0-100) for color intensity, defaults to 100
 * @param {number} props.lightness - Base lightness value (0-100) for brightness, defaults to 51
 */
const SquareButton = ({ 
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
  const highSat = baseSat === 0 ? 0 : Math.min(100, baseSat + 30); // For brighter elements (clamped to 100)
  const edgeSat = baseSat === 0 ? 0 : Math.max(20, baseSat - 30); // For edge elements (minimum 20% for visibility)

  // Calculate relative lightness based on base lightness
  const baseLit = Math.max(0, Math.min(100, lightness)); // Clamp between 0-100
  const darkLit = Math.max(10, baseLit - 28); // For dark elements (minimum 10% for visibility)
  const medLit = baseLit; // For medium elements
  const lightLit = Math.min(95, baseLit + 34); // For light elements (maximum 95%)
  const brightLit = Math.min(90, baseLit + 22); // For bright elements
  const hoverLit = Math.min(95, baseLit + 40); // For hover states

  // Calculate hue-shifted colors while maintaining saturation/lightness relationships
  const buttonStyle = {
    '--sq-hue': hue,
    '--sq-base-dark': `hsl(${hue}, ${lowSat}%, ${darkLit}%)`, // Lower saturation and lightness for dark elements
    '--sq-base-medium': `hsl(${hue}, ${baseSat}%, ${medLit}%)`, // Base saturation and lightness for medium elements
    '--sq-base-light': `hsl(0, 0%, 100%)`, // White stays white (no saturation)
    '--sq-edge-light': `hsl(${hue}, ${edgeSat}%, ${lightLit}%)`, // Lower saturation for subtle edges
    '--sq-edge-medium': `hsl(${hue}, ${baseSat}%, ${medLit}%)`, // Base saturation
    '--sq-edge-dark': `hsl(${hue}, ${baseSat}%, ${Math.max(10, baseLit - 8)}%)`, // Base saturation, slightly darker lightness
    '--sq-hole-color': `hsl(0, 0%, 19%)`, // Gray stays gray (no saturation)
    '--sq-shadow-light': `hsl(${hue}, ${highSat}%, ${brightLit}%)`, // Higher saturation for glows - FIXED
    '--sq-shadow-bright': `hsl(${hue}, ${highSat}%, ${Math.max(20, baseLit + 7)}%)`, // Higher saturation for bright shadows - FIXED
    '--sq-hover-light': `hsl(${hue}, ${baseSat}%, ${hoverLit}%)`, // Base saturation for hover states
    '--sq-hover-medium': `hsl(${hue}, ${highSat}%, ${Math.min(85, baseLit + 11)}%)`, // Higher saturation for hover highlights
    '--sq-hover-dark': `hsl(${hue}, ${baseSat}%, ${medLit}%)`, // Base saturation
    '--sq-inset-light': `hsla(${hue}, ${Math.min(80, baseSat + 20)}%, ${Math.min(90, baseLit + 23)}%, 0.44)`, // Inset shadow light
    '--sq-inset-medium': `hsla(${hue}, ${Math.min(90, baseSat + 30)}%, ${Math.min(85, baseLit + 18)}%, 0.33)`, // Inset shadow medium
    ...style
  };

  return (
    <button 
      className={`sq-button ${className}`}
      onClick={onClick}
      style={buttonStyle}
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
