/**
 * Central theme registry
 * Export all available themes from this file
 */

import { defaultTheme } from './default';
import { glassRefractionTheme } from './glass-refraction';
import { obsidianEmberTheme } from './obsidian-ember';
import type { ThemeRegistry } from './core/types';

// Registry of all available themes
export const themes: ThemeRegistry = {
    default: defaultTheme,
    'glass-refraction': glassRefractionTheme,
    'obsidian-ember': obsidianEmberTheme,
};

// Export individual themes
export { defaultTheme, glassRefractionTheme, obsidianEmberTheme };

// Export types
export * from './core/types';
