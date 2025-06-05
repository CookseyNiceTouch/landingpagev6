import React from 'react';
import './styles/styles.css';

/**
 * Background Component - Decorative screw elements for page background
 * 
 * Renders decorative screws at:
 * - Four corners (2rem inset)
 * - Edge positions (2x8 pattern down left and right sides)
 */
const Background = () => {
  return (
    <div className="background-screws">
      {/* Corner screws handled by pseudo-elements */}
      {/* Edge screws handled by background-image positioning */}
    </div>
  );
};

export default Background;
