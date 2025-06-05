import React, { useState } from 'react';
import './styles/styles.css';
import { Knob, Hole } from './UIbits';
import RiveAnimation from './RiveAnimation';

const Feature = ({ 
  title = "Context-Aware Workflow",
  description = "Pull in briefs, transcripts, and notes to give your AI the full picture. Nice Touch builds a contextual understanding of your project - automatically linking relevant tasks, creative direction, and client expectations.",
  imageSrc = "/feature-screenshot.png",
  imageAlt = "Feature Screenshot",
  artboard = null,
  animationClass = ""
}) => {
  // State for knob rotation (if you want controlled mode)
  const [knobAngle, setKnobAngle] = useState(0);
  
  // Function to split title into two lines at the best point near the middle
  const splitTitle = (titleString) => {
    if (!titleString) return { firstLine: '', secondLine: '' };
    
    const words = titleString.trim().split(' ');
    if (words.length <= 1) return { firstLine: titleString, secondLine: '' };
    
    // Find the middle point
    const midPoint = Math.floor(words.length / 2);
    
    // Split at the middle point, ensuring we don't leave single words isolated
    let splitIndex;
    if (words.length <= 3) {
      // For short titles, split after first word
      splitIndex = 1;
    } else {
      // For longer titles, split at middle or slightly before/after for better balance
      splitIndex = midPoint;
    }
    
    const firstLine = words.slice(0, splitIndex).join(' ');
    const secondLine = words.slice(splitIndex).join(' ');
    
    return { firstLine, secondLine };
  };

  const { firstLine, secondLine } = splitTitle(title);

  // Generate fallback image path from artboard name - matching user's pattern
  const fallbackSrc = artboard ? `/rivestills/${artboard}.png` : null;

  return (
    <div className="feature-container">
      {/* Feature Title Section */}
      <div className="feature-section-base feature-title">
        <h2 className="feature-title-text">
          <span className="feature-title-line">{firstLine}</span>
          {secondLine && <span className="feature-title-line">{secondLine}</span>}
        </h2>
      </div>

      {/* Feature Content Section */}
      <div className="feature-content">
        {/* Image Section */}
        <div className="feature-image">
          {artboard ? (
            <RiveAnimation 
              artboard={artboard} 
              className={animationClass}
              fallbackSrc={fallbackSrc}
            />
          ) : (
            imageSrc && <img 
              src={imageSrc} 
              alt={imageAlt || title}
              className="feature-screenshot"
            />
          )}
        </div>

        {/* Text Section */}
        <div className="feature-text">
          <p className="feature-description">{description}</p>
        </div>
      </div>

      {/* Feature Footer Section */}
      <div className="feature-section-base feature-footer">
        {/* Decorative Hole/Dot - Exact Figma size */}
        <Hole size={10} />

        {/* Interactive Knob - Uncontrolled mode (manages own state) */}
        <Knob 
          size={90} 
          sensitivity={1.5}
          minAngle={-135}
          maxAngle={135}
        />
      </div>
    </div>
  );
};

export default Feature;
