import type { ThemeConfig } from '../core/types';

/**
 * Glass Refraction Theme - iOS-inspired glassmorphism
 * Neutral color palette with subtle gradients, backdrop blur effects,
 * and snappy animations (150-200ms)
 */
export const glassRefractionTheme: ThemeConfig = {
  id: 'glass-refraction',
  name: 'Glass Refraction',
  description: 'Modern iOS-inspired glassmorphism with neutral colors and subtle gradients',

  colors: {
    light: {
      // Neutral, slightly warm whites and grays
      background: '0 0% 98%',  // Very light gray, almost white
      foreground: '0 0% 10%',  // Near black for high contrast

      // Glass surfaces with subtle transparency
      card: '0 0% 100%',  // Pure white for glass effect
      cardForeground: '0 0% 10%',
      popover: '0 0% 100%',
      popoverForeground: '0 0% 10%',

      // Neutral primary color (subtle cool gray)
      primary: '210 10% 23%',  // Muted dark blue-gray
      primaryForeground: '0 0% 100%',

      // Soft secondary (lighter neutral)
      secondary: '0 0% 96%',
      secondaryForeground: '0 0% 15%',

      // Muted backgrounds
      muted: '0 0% 94%',
      mutedForeground: '0 0% 40%',

      // Subtle accent (light gray with hint of warmth)
      accent: '30 5% 95%',
      accentForeground: '0 0% 15%',

      // Destructive (keeping minimal saturation)
      destructive: '0 45% 58%',  // Muted red
      destructiveForeground: '0 0% 100%',

      // Borders and inputs (very subtle)
      border: '0 0% 90%',
      input: '0 0% 92%',
      ring: '210 10% 23%',  // Matches primary

      // Charts (neutral palette)
      chart1: '210 20% 60%',
      chart2: '180 15% 55%',
      chart3: '150 18% 50%',
      chart4: '30 20% 65%',
      chart5: '0 15% 60%',
    },

    dark: {
      // Deep, neutral dark backgrounds with subtle gradients
      background: '0 0% 7%',  // Very dark gray, not pure black
      foreground: '0 0% 95%',  // Off-white

      // Glass surfaces for dark mode
      card: '0 0% 12%',  // Dark but not black for translucency
      cardForeground: '0 0% 95%',
      popover: '0 0% 10%',
      popoverForeground: '0 0% 95%',

      // Lighter primary for dark mode readability
      primary: '210 15% 75%',  // Light neutral gray-blue
      primaryForeground: '0 0% 10%',

      // Secondary surfaces
      secondary: '0 0% 15%',
      secondaryForeground: '0 0% 95%',

      // Muted elements
      muted: '0 0% 18%',
      mutedForeground: '0 0% 65%',

      // Accent
      accent: '210 10% 20%',
      accentForeground: '0 0% 95%',

      // Destructive
      destructive: '0 50% 45%',  // Darker muted red
      destructiveForeground: '0 0% 95%',

      // Borders and inputs
      border: '0 0% 20%',
      input: '0 0% 18%',
      ring: '210 15% 75%',

      // Charts
      chart1: '210 25% 55%',
      chart2: '180 20% 50%',
      chart3: '150 22% 48%',
      chart4: '30 25% 58%',
      chart5: '0 20% 52%',
    },
  },

  effects: {
    // Backdrop blur settings for glassmorphism
    blur: {
      sm: '4px',
      md: '10px',
      lg: '20px',
      xl: '40px',
    },

    // Opacity levels for glass surfaces
    opacity: {
      glass: '0.7',
      'glass-strong': '0.85',
      'glass-light': '0.5',
    },

    // Enable backdrop-filter
    backgroundBlur: true,

    // Subtle gradient backgrounds
    gradients: {
      enabled: true,
      backgrounds: [
        // Light mode: Modern soft mesh gradient with warm tones
        'radial-gradient(at 0% 0%, hsl(210, 100%, 97%) 0px, transparent 50%), radial-gradient(at 50% 0%, hsl(200, 100%, 95%) 0px, transparent 50%), radial-gradient(at 100% 0%, hsl(240, 100%, 97%) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(180, 100%, 96%) 0px, transparent 50%), radial-gradient(at 100% 50%, hsl(260, 100%, 96%) 0px, transparent 50%), radial-gradient(at 0% 100%, hsl(190, 100%, 96%) 0px, transparent 50%), radial-gradient(at 50% 100%, hsl(220, 100%, 96%) 0px, transparent 50%), radial-gradient(at 100% 100%, hsl(250, 100%, 97%) 0px, transparent 50%)',

        // Dark mode: Deep, cosmic gradient with purple and blue tones
        'radial-gradient(at 0% 0%, hsl(240, 50%, 12%) 0px, transparent 50%), radial-gradient(at 50% 0%, hsl(220, 40%, 10%) 0px, transparent 50%), radial-gradient(at 100% 0%, hsl(260, 45%, 11%) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(200, 35%, 9%) 0px, transparent 50%), radial-gradient(at 100% 50%, hsl(280, 40%, 10%) 0px, transparent 50%), radial-gradient(at 0% 100%, hsl(210, 38%, 10%) 0px, transparent 50%), radial-gradient(at 50% 100%, hsl(230, 42%, 11%) 0px, transparent 50%), radial-gradient(at 100% 100%, hsl(270, 45%, 12%) 0px, transparent 50%)',
      ],
    },
  },

  // Component-specific overrides for glass effect
  components: {
    button: {
      baseClasses: 'backdrop-blur-md transition-all duration-150',
      customCSS: `
        .glass-button {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: all 150ms ease-out;
        }
        .glass-button:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .glass-button:active {
          transform: translateY(0);
        }
      `,
    },
    card: {
      baseClasses: 'backdrop-blur-lg transition-all duration-150',
      customCSS: `
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(20px) saturate(180%);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          transition: all 150ms ease-out;
        }
        .glass-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
          transform: translateY(-2px);
        }
        
        .dark .glass-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `,
    },
  },
};
