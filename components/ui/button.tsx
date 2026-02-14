'use client';

/**
 * Smart Button Wrapper
 * 
 * This component detects the active theme and exports the appropriate
 * Button implementation from the theme's component directory.
 * 
 * Usage remains unchanged:
 *   import { Button } from '@/components/ui/button'
 *   <Button variant="default">Click me</Button>
 */

import { useVisualTheme } from '@/themes/core/ThemeRegistry';

// Import Button from each theme
import {
  Button as DefaultButton,
  buttonVariants as defaultButtonVariants,
  type ButtonProps
} from '@/themes/default/components/Button';

import {
  Button as GlassButton,
  buttonVariants as glassButtonVariants
} from '@/themes/glass-refraction/components/Button';

import {
  Button as EmberButton,
  buttonVariants as emberButtonVariants
} from '@/themes/obsidian-ember/components/Button';

// Export ButtonProps for consumer convenience
export type { ButtonProps };

/**
 * Button Component Registry
 * Maps theme IDs to their Button implementations
 * 
 * To add a new theme:
 * 1. Import the theme's Button component above
 * 2. Add entry to this registry: 'theme-id': ThemeButton
 */
const BUTTON_REGISTRY = {
  'default': DefaultButton,
  'glass-refraction': GlassButton,
  'obsidian-ember': EmberButton,
} as const;

const BUTTON_VARIANTS_REGISTRY = {
  'default': defaultButtonVariants,
  'glass-refraction': glassButtonVariants,
  'obsidian-ember': emberButtonVariants,
} as const;

/**
 * Theme-aware Button component
 * Automatically uses the correct Button implementation based on active theme
 */
export function Button(props: ButtonProps) {
  const visualTheme = useVisualTheme();

  // Get Button from registry, fallback to default if theme not found
  const ButtonComponent = BUTTON_REGISTRY[visualTheme as keyof typeof BUTTON_REGISTRY] || BUTTON_REGISTRY.default;

  return <ButtonComponent {...props} />;
}

/**
 * Export buttonVariants based on current theme
 * This is a convenience export for edge cases where direct variant access is needed
 */
export function useButtonVariants() {
  const visualTheme = useVisualTheme();
  return BUTTON_VARIANTS_REGISTRY[visualTheme as keyof typeof BUTTON_VARIANTS_REGISTRY] || defaultButtonVariants;
}

// For backward compatibility, export default buttonVariants
export const buttonVariants = defaultButtonVariants;
;
