'use client';

import { useTheme as useNextTheme } from 'next-themes';
import { themes } from '../index';
import type { ThemeConfig } from './types';

/**
 * Custom hook to access theme configuration and utilities
 */
export function useTheme(visualTheme: string = 'default') {
    const { theme: mode, setTheme: setMode } = useNextTheme();

    const currentTheme: ThemeConfig = themes[visualTheme] || themes.default;

    /**
     * Get a CSS variable value by path
     * Example: getCSSVar('colors.primary') returns 'var(--primary)'
     */
    const getCSSVar = (path: string): string => {
        const parts = path.split('.');
        const varName = parts[parts.length - 1];
        return `hsl(var(--${varName}))`;
    };

    return {
        // Visual theme info
        theme: currentTheme,
        themeId: currentTheme.id,

        // Light/dark mode info (from next-themes)
        mode,
        setMode,

        // Utilities
        getCSSVar,
    };
}
