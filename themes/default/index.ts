import type { ThemeConfig } from '../core/types';

/**
 * Default theme - preserves current shadcn styling
 * This theme maintains backward compatibility with the existing portfolio design
 */
export const defaultTheme: ThemeConfig = {
    id: 'default',
    name: 'Default',
    description: 'Classic shadcn theme with clean, professional styling',

    colors: {
        light: {
            background: '0 0% 100%',
            foreground: '240 10% 3.9%',
            card: '0 0% 100%',
            cardForeground: '240 10% 3.9%',
            popover: '0 0% 100%',
            popoverForeground: '240 10% 3.9%',
            primary: '142.1 76.2% 36.3%',
            primaryForeground: '355.7 100% 97.3%',
            secondary: '240 4.8% 95.9%',
            secondaryForeground: '240 5.9% 10%',
            muted: '240 4.8% 95.9%',
            mutedForeground: '240 3.8% 46.1%',
            accent: '240 4.8% 95.9%',
            accentForeground: '240 5.9% 10%',
            destructive: '0 84.2% 60.2%',
            destructiveForeground: '0 0% 98%',
            border: '240 5.9% 90%',
            input: '240 5.9% 90%',
            ring: '142.1 76.2% 36.3%',
            chart1: '12 76% 61%',
            chart2: '173 58% 39%',
            chart3: '197 37% 24%',
            chart4: '43 74% 66%',
            chart5: '27 87% 67%',
        },
        dark: {
            background: '20 14.3% 4.1%',
            foreground: '0 0% 95%',
            card: '24 9.8% 10%',
            cardForeground: '0 0% 95%',
            popover: '0 0% 9%',
            popoverForeground: '0 0% 95%',
            primary: '142.1 70.6% 45.3%',
            primaryForeground: '144.9 80.4% 10%',
            secondary: '240 3.7% 15.9%',
            secondaryForeground: '0 0% 98%',
            muted: '0 0% 15%',
            mutedForeground: '240 5% 64.9%',
            accent: '12 6.5% 15.1%',
            accentForeground: '0 0% 98%',
            destructive: '0 62.8% 30.6%',
            destructiveForeground: '0 85.7% 97.3%',
            border: '240 3.7% 15.9%',
            input: '240 3.7% 15.9%',
            ring: '142.4 71.8% 29.2%',
            chart1: '220 70% 50%',
            chart2: '160 60% 45%',
            chart3: '30 80% 55%',
            chart4: '280 65% 60%',
            chart5: '340 75% 55%',
        },
    },

    // No special effects for default theme
    effects: {
        backgroundBlur: false,
        gradients: {
            enabled: false,
        },
    },
};
