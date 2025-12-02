'use client';

import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { themes } from '../index';
import type { ThemeConfig, ColorScheme } from './types';

interface ThemeRegistryProps extends Omit<ThemeProviderProps, 'children'> {
    visualTheme?: string;  // Which visual theme to use (e.g., 'default' or 'glass-refraction')
    children: React.ReactNode;
}

// Create context for visual theme ID (safe for SSR)
const VisualThemeContext = createContext<string>('default');

/**
 * Hook to get current visual theme ID
 * Safe for SSR - returns same value on server and client
 */
export function useVisualTheme() {
    return useContext(VisualThemeContext);
}

/**
 * ThemeRegistry Component
 * 
 * Extends next-themes to support multiple visual themes beyond just light/dark.
 * Injects CSS variables dynamically based on the current theme configuration.
 */
export function ThemeRegistry({
    visualTheme = 'default',
    children,
    ...themeProviderProps
}: ThemeRegistryProps) {
    const theme = useMemo(() => {
        return themes[visualTheme] || themes.default;
    }, [visualTheme]);

    // Inject CSS variables when theme changes (client-side only)
    useEffect(() => {
        injectThemeVariables(theme);

        // Set data attribute on HTML element for theme-specific CSS
        document.documentElement.setAttribute('data-visual-theme', theme.id);

        // Inject gradient backgrounds if enabled
        if (theme.effects?.gradients?.enabled) {
            injectGradientBackground(theme);
        }

        // Inject custom component CSS if present
        if (theme.components) {
            injectComponentCSS(theme);
        }

        return () => {
            // Cleanup on unmount
            document.documentElement.removeAttribute('data-visual-theme');
        };
    }, [theme]);

    return (
        <VisualThemeContext.Provider value={theme.id}>
            <NextThemeProvider {...themeProviderProps}>
                {children}
            </NextThemeProvider>
        </VisualThemeContext.Provider>
    );
}

/**
 * Inject color CSS variables for both light and dark modes
 */
function injectThemeVariables(theme: ThemeConfig) {
    const root = document.documentElement;

    // Create or get style element for theme variables
    let styleElement = document.getElementById('theme-variables');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'theme-variables';
        document.head.appendChild(styleElement);
    }

    // Generate CSS for light and dark modes
    const lightCSS = generateColorCSS(':root', theme.colors.light);
    const darkCSS = generateColorCSS('.dark', theme.colors.dark);

    // Add radius variable (preserving from original)
    const extraCSS = `
    :root {
      --radius: 0.3rem;
    }
  `;

    styleElement.textContent = `${lightCSS}\n${darkCSS}\n${extraCSS}`;
}

/**
 * Generate CSS variable declarations from color scheme
 */
function generateColorCSS(selector: string, colors: ColorScheme): string {
    const vars: string[] = [];

    // Map color properties to CSS variable names
    const colorMap: Record<string, string> = {
        background: '--background',
        foreground: '--foreground',
        card: '--card',
        cardForeground: '--card-foreground',
        popover: '--popover',
        popoverForeground: '--popover-foreground',
        primary: '--primary',
        primaryForeground: '--primary-foreground',
        secondary: '--secondary',
        secondaryForeground: '--secondary-foreground',
        muted: '--muted',
        mutedForeground: '--muted-foreground',
        accent: '--accent',
        accentForeground: '--accent-foreground',
        destructive: '--destructive',
        destructiveForeground: '--destructive-foreground',
        border: '--border',
        input: '--input',
        ring: '--ring',
        chart1: '--chart-1',
        chart2: '--chart-2',
        chart3: '--chart-3',
        chart4: '--chart-4',
        chart5: '--chart-5',
    };

    Object.entries(colorMap).forEach(([key, cssVar]) => {
        const value = colors[key as keyof ColorScheme];
        if (value) {
            vars.push(`  ${cssVar}: ${value};`);
        }
    });

    // Add custom colors if present
    if (colors.custom) {
        Object.entries(colors.custom).forEach(([key, value]) => {
            vars.push(`  --${key}: ${value};`);
        });
    }

    return `${selector} {\n${vars.join('\n')}\n}`;
}

/**
 * Inject gradient background styles
 */
function injectGradientBackground(theme: ThemeConfig) {
    if (!theme.effects?.gradients?.backgrounds) return;

    let styleElement = document.getElementById('theme-gradients');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'theme-gradients';
        document.head.appendChild(styleElement);
    }

    const [lightGradient, darkGradient] = theme.effects.gradients.backgrounds;

    styleElement.textContent = `
    :root {
      --theme-gradient: ${lightGradient};
    }

    .dark {
      --theme-gradient: ${darkGradient || lightGradient};
    }

    body {
      background: var(--theme-gradient);
      background-attachment: fixed;
    }
  `;
}

/**
 * Inject component-specific custom CSS
 */
function injectComponentCSS(theme: ThemeConfig) {
    if (!theme.components) return;

    let styleElement = document.getElementById('theme-components');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'theme-components';
        document.head.appendChild(styleElement);
    }

    let css = '';
    Object.entries(theme.components).forEach(([componentName, styles]) => {
        if (styles?.customCSS) {
            css += `\n/* ${componentName} */\n${styles.customCSS}\n`;
        }
    });

    styleElement.textContent = css;
}
