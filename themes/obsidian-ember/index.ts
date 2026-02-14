import type { ThemeConfig } from '../core/types';

export const obsidianEmberTheme: ThemeConfig = {
  id: 'obsidian-ember',
  name: 'Obsidian Ember',
  description:
    'Premium dark editorial theme with warm amber accents and refined typography',

  colors: {
    light: {
      background: '40 20% 97%',
      foreground: '30 10% 12%',

      card: '40 15% 99%',
      cardForeground: '30 10% 12%',
      popover: '40 15% 99%',
      popoverForeground: '30 10% 12%',

      primary: '36 90% 50%',
      primaryForeground: '30 10% 8%',

      secondary: '35 10% 93%',
      secondaryForeground: '30 10% 20%',

      muted: '35 8% 91%',
      mutedForeground: '30 5% 45%',

      accent: '36 60% 92%',
      accentForeground: '30 10% 15%',

      destructive: '0 65% 55%',
      destructiveForeground: '0 0% 100%',

      border: '35 10% 88%',
      input: '35 8% 90%',
      ring: '36 90% 50%',

      chart1: '36 80% 55%',
      chart2: '25 70% 50%',
      chart3: '15 60% 45%',
      chart4: '45 65% 60%',
      chart5: '5 55% 50%'
    },

    dark: {
      background: '25 15% 6%',
      foreground: '35 10% 90%',

      card: '25 12% 10%',
      cardForeground: '35 10% 90%',
      popover: '25 12% 9%',
      popoverForeground: '35 10% 90%',

      primary: '36 90% 55%',
      primaryForeground: '25 15% 6%',

      secondary: '25 10% 14%',
      secondaryForeground: '35 10% 88%',

      muted: '25 8% 16%',
      mutedForeground: '35 5% 55%',

      accent: '30 15% 15%',
      accentForeground: '35 10% 90%',

      destructive: '0 55% 45%',
      destructiveForeground: '0 0% 95%',

      border: '25 8% 18%',
      input: '25 8% 15%',
      ring: '36 90% 55%',

      chart1: '36 85% 60%',
      chart2: '25 75% 55%',
      chart3: '15 65% 50%',
      chart4: '45 70% 65%',
      chart5: '5 60% 55%'
    }
  },

  effects: {
    blur: {
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '32px'
    },
    backgroundBlur: false,
    gradients: {
      enabled: true,
      backgrounds: [
        'radial-gradient(ellipse at 0% 0%, hsl(36, 40%, 95%) 0px, transparent 50%), radial-gradient(ellipse at 100% 0%, hsl(30, 30%, 96%) 0px, transparent 50%), radial-gradient(ellipse at 50% 100%, hsl(40, 20%, 96%) 0px, transparent 50%)',
        'radial-gradient(ellipse at 20% 0%, hsl(25, 30%, 10%) 0px, transparent 60%), radial-gradient(ellipse at 80% 100%, hsl(36, 25%, 8%) 0px, transparent 60%), radial-gradient(ellipse at 50% 50%, hsl(25, 15%, 6%) 0px, transparent 100%)'
      ]
    }
  },

  components: {
    button: {
      baseClasses: 'transition-all duration-250',
      customCSS: `
        [data-visual-theme="obsidian-ember"] .ember-btn-glow {
          box-shadow: 0 0 20px rgba(240, 165, 0, 0.15);
        }
        [data-visual-theme="obsidian-ember"] .ember-btn-glow:hover {
          box-shadow: 0 0 30px rgba(240, 165, 0, 0.25), 0 4px 16px rgba(0,0,0,0.2);
        }
      `
    },
    card: {
      baseClasses: 'transition-all duration-300',
      customCSS: `
        [data-visual-theme="obsidian-ember"] .ember-card {
          border: 1px solid hsl(25, 8%, 18%);
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .dark [data-visual-theme="obsidian-ember"] .ember-card:hover {
          border-color: hsl(36, 50%, 30%);
          box-shadow: 0 4px 24px rgba(240, 165, 0, 0.08), 0 8px 32px rgba(0,0,0,0.3);
          transform: translateY(-2px);
        }
      `
    }
  }
};
