# Feature Component

A React component built from Figma design specifications featuring a modern, professional layout with decorative elements.

## Features

- **Responsive Design**: Adapts to different screen sizes
- **Figma-Accurate Styling**: Matches the original design specifications including gradients, shadows, and typography
- **Customizable Props**: Easy to customize content while maintaining design consistency
- **Modern CSS**: Uses flexbox, gradients, and advanced shadow effects

## Usage

```jsx
import Feature from './components/feature';

// Basic usage with default content
<Feature />

// Customized content
<Feature 
  title="Your Custom Title"
  description="Your custom description text here..."
  imageSrc="/your-image.jpg"
  imageAlt="Your image description"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Context-Aware Workflow" | The main feature title |
| `description` | string | Default description | The feature description text |
| `imageSrc` | string | "/feature-screenshot.png" | Path to the feature image |
| `imageAlt` | string | "Feature Screenshot" | Alt text for the image |

## Styling

All styles are contained in `src/components/styles/styles.css`. The component uses:

- **Inter font family** for typography
- **Radial gradients** for backgrounds
- **Complex box shadows** for depth
- **Responsive breakpoints** at 1200px and 768px

## Design Elements

- **Title Section**: Large bold text with subtle text shadows
- **Content Section**: Two-column layout with image and descriptive text
- **Footer Section**: Decorative elements including a "hole" dot and knob component
- **Border Effects**: Gradient borders throughout the component

## Responsive Behavior

- **Desktop (>1200px)**: Full layout as designed
- **Tablet (768px-1200px)**: Stacked layout, scaled typography
- **Mobile (<768px)**: Compact spacing, smaller text

## File Structure

```
src/components/
├── feature.jsx          # Main component
└── styles/
    └── styles.css       # Component styles
```

## Next Steps

- Add more feature variants
- Implement animation effects
- Add accessibility improvements
- Optimize for performance 