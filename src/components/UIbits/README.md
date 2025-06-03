# UIbits - Reusable UI Components

A collection of high-quality, Figma-accurate UI components for consistent design across the application.

## Components

### 🎛️ Knob

A 3D knob control with precise Figma styling and customizable positioning.

```jsx
import { Knob } from './components/UIbits';

// Basic usage
<Knob />

// Custom size and angle
<Knob size={120} indicatorAngle={45} />

// With interaction
<Knob 
  size={90} 
  indicatorAngle={rotation} 
  onClick={handleKnobClick}
  className="my-knob"
/>
```

**Props:**
- `size` (number): Knob diameter in pixels (default: 90)
- `indicatorAngle` (number): Indicator angle in degrees, 0 = top (default: 0)
- `className` (string): Additional CSS classes
- `style` (object): Additional inline styles
- `...props`: Any other props passed to the container div

**Features:**
- Figma-accurate 3D styling with complex shadows
- Responsive indicator positioning
- Hover and active states
- Accessibility support
- Size variants (small, large)

### 🕳️ Hole

A 3D inset hole/dot component with realistic depth effects.

```jsx
import { Hole } from './components/UIbits';

// Basic usage
<Hole />

// Custom size
<Hole size={16} />

// With styling
<Hole 
  size={8} 
  className="small-hole"
  style={{ margin: '10px' }}
/>
```

**Props:**
- `size` (number): Hole diameter in pixels (default: 12)
- `className` (string): Additional CSS classes
- `style` (object): Additional inline styles
- `...props`: Any other props passed to the container div

**Features:**
- Realistic inset shadow effects
- Figma-accurate depth perception
- Multiple size variants
- Consistent with design system

## Usage Examples

### Basic Import
```jsx
import { Knob, Hole } from './components/UIbits';
```

### Size Variants
```jsx
// Small components
<Knob className="ui-knob--small" />
<Hole className="ui-hole--small" />

// Large components
<Knob className="ui-knob--large" />
<Hole className="ui-hole--large" />
```

### Interactive Knob
```jsx
const [rotation, setRotation] = useState(0);

<Knob 
  size={90}
  indicatorAngle={rotation}
  onClick={() => setRotation(rotation + 45)}
/>
```

## Styling

All styles are contained in `UIstyles.css` with:
- Figma-accurate gradients and shadows
- Interactive states (hover, active, disabled)
- Accessibility features
- Responsive design considerations

## Design Specifications

- **Knob**: Based on Figma component with exact gradients, shadows, and dimensions
- **Hole**: 3D inset effect with proper depth perception
- **Colors**: Consistent with design system palette
- **Shadows**: Multi-layer shadows for realistic 3D appearance

## Browser Support

- Modern browsers with CSS mask support
- Graceful degradation for older browsers
- CSS custom properties for theming 