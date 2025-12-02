# Theme Component Architecture

## Directory Structure

Now theme-specific styling lives in the theme directories for better separation of concerns:

```
themes/
├── default/
│   ├── index.ts                  # Theme configuration
│   ├── button-styles.ts          # Button styling for default theme
│   └── card-styles.ts            # Card styling for default theme
│
├── glass-refraction/
│   ├── index.ts                  # Theme configuration
│   ├── button-styles.ts          # Button styling with glassmorphism
│   └── card-styles.ts            # Card styling with glassmorphism
│
└── core/
    ├── types.ts                  # Type definitions
    ├── ThemeRegistry.tsx         # Theme provider
    └── useTheme.ts               # Theme hook

components/
└── themed/
    ├── Button.tsx                # Smart component that imports theme styles
    └── Card.tsx                  # Smart component that imports theme styles
```

## How It Works

### 1. Theme Directories Define Appearance

Each theme folder contains style definition files that show exactly what that theme's components look like:

**Example: [themes/glass-refraction/button-styles.ts](file:///Users/ehsanu/playground/portfolio-ehsan/themes/glass-refraction/button-styles.ts)**
```typescript
export const glassButtonClasses = {
  base: 'shadow-lg shadow-black/5',
  glass: 'backdrop-blur-md bg-background/70 border border-border/50...',
};

export const glassVariantOverrides = {
  'default': 'glass',  // Use glass variant for default buttons
};
```

**Example: [themes/default/button-styles.ts](file:///Users/ehsanu/playground/portfolio-ehsan/themes/default/button-styles.ts)**
```typescript
export const defaultButtonClasses = {
  base: '',  // No additional classes - standard shadcn
  glass: '',
};
```

### 2. Smart Components Import and Apply Styles

The `themed/Button.tsx` and `themed/Card.tsx` components:
- Import styles from all theme directories
- Use `useVisualTheme()` hook to detect current theme
- Apply the appropriate theme's styles

**Example from [themed/Button.tsx](file:///Users/ehsanu/playground/portfolio-ehsan/components/themed/Button.tsx#L7-L8)**:
```typescript
import { defaultButtonClasses } from '@/themes/default/button-styles';
import { glassButtonClasses, glassVariantOverrides } from '@/themes/glass-refraction/button-styles';

// Later in component:
const themeClasses = visualTheme === 'glass-refraction' 
  ? glassButtonClasses 
  : defaultButtonClasses;
```

## Benefits

✅ **Separation of Concerns**: Theme styling is separate from component logic
✅ **Discoverability**: Want to see what a glass button looks like? Check `themes/glass-refraction/button-styles.ts`
✅ **Extensibility**: Adding a new theme? Just create a new theme folder with style files
✅ **Type Safety**: Full TypeScript support
✅ **No Code Duplication**: Component logic exists once, styles vary by theme

## Adding a New Theme

1. Create folder: `themes/my-new-theme/`
2. Add `button-styles.ts` with your button classes
3. Add `card-styles.ts` with your card classes
4. Create `index.ts` with theme config
5. Update imports in `themed/Button.tsx` and `themed/Card.tsx`

That's it! Your new theme is ready to use.
