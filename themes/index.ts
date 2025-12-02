/**
 * Central theme registry
 * Export all available themes from this file
 */

import { defaultTheme } from './default';
import { glassRefractionTheme } from './glass-refraction';
import type { ThemeRegistry } from './core/types';

// Registry of all available themes
export const themes: ThemeRegistry = {
    default: defaultTheme,
    'glass-refraction': glassRefractionTheme,
};

// Export individual themes
export { defaultTheme, glassRefractionTheme };

// Export types
export * from './core/types';
