# Glass Box Design System - Knowledge Base Entry

## Overview
Our glass morphism design system creates stunning, consistent UI elements throughout the website using our brand colors (yellow, black/gray, blue) with glassmorphism effects.

## Glass Box Classes

### Brand-Focused Variants (Primary Usage)

#### `.glass-box-brand-primary`
- **Use for**: Main content cards, hero elements, primary CTAs
- **Colors**: Brand yellow (`bg-brand-yellow/10`, `border-brand-yellow/30`)
- **Effect**: Subtle yellow glow with enhanced hover states

#### `.glass-box-brand-dark`
- **Use for**: Quote sections, secondary content, dark contrast areas
- **Colors**: Brand black (`bg-brand-black/20`, `border-gray-600/30`)
- **Effect**: Dark glass with gray borders for sophistication

#### `.glass-box-brand-accent`
- **Use for**: Technical content, tech stack, professional sections
- **Colors**: Brand blue (`bg-brand-blue/10`, `border-brand-blue/30`)
- **Effect**: Blue accent glass for technical credibility

#### `.glass-box-neutral`
- **Use for**: FAQ sections, general content, less emphasis
- **Colors**: Gray tones (`bg-gray-100/20`, `border-gray-300/30`)
- **Effect**: Subtle neutral glass for readability

### Dotted Border Variants (Special Usage)

#### `.glass-box-brand-primary-dotted`
- **Use for**: Metrics, achievements, highlighted stats
- **Style**: Dashed border with brand yellow colors
- **Effect**: Eye-catching dotted borders for special content

#### `.glass-box-brand-dark-dotted`
- **Use for**: Dark themed special content
- **Style**: Dashed border with gray colors

#### `.glass-box-brand-accent-dotted`
- **Use for**: Technical highlights, special features
- **Style**: Dashed border with brand blue colors

## Design Principles

### Visual Effects
- **Backdrop blur**: `backdrop-blur-xl` for frosted glass effect
- **Rounded corners**: `rounded-xl` for consistent modern look
- **Shadows**: `shadow-soft` with `hover:shadow-glow` for depth
- **Hover animations**: `hover:scale-[1.02]` for subtle interaction feedback
- **Smooth transitions**: `transition-all duration-300` for professional feel

### Color Usage Guidelines
1. **Brand Yellow**: Primary content, CTAs, main features
2. **Brand Blue**: Technical content, professional sections
3. **Brand Black/Gray**: Quotes, secondary content, dark themes
4. **Neutral Gray**: FAQ, general content, low emphasis

### Accessibility Considerations
- All glass boxes maintain proper contrast ratios
- Hover states are clearly visible
- Focus states are accessible
- Reduced motion respected in animations

## Implementation Examples

### Services Section
```jsx
<div className="glass-box-brand-primary p-6">
  <ServiceIcon className="w-12 h-12 text-brand-yellow mb-4" />
  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
  <p className="text-gray-400 text-sm">{description}</p>
</div>
```

### Tech Stack Section
```jsx
<div className="glass-box-brand-accent p-6 text-center">
  <TechIcon className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
  <h3 className="text-lg font-semibold text-white mb-2">{tech}</h3>
</div>
```

### Metrics Display
```jsx
<div className="glass-box-brand-primary-dotted p-4">
  <div className="text-2xl font-bold text-brand-yellow">{value}</div>
  <div className="text-sm text-gray-400">{label}</div>
</div>
```

## Performance Notes
- Uses CSS custom properties for efficient theming
- Optimized backdrop-filter usage
- Smooth 60fps animations
- Reduced motion support included

## Usage Rules
1. **Consistency**: Always use brand variants for main content
2. **Hierarchy**: Primary > Accent > Dark > Neutral (order of emphasis)
3. **Dotted borders**: Only for special content like metrics/achievements
4. **Spacing**: Maintain consistent padding (`p-6` for standard cards)
5. **Icons**: Always use `text-brand-yellow` for icons in glass boxes
6. **Typography**: White headings, gray-400 descriptions for readability

This design system ensures consistent, stunning glass morphism effects that align with our Swiss design principles while maintaining accessibility and performance standards.