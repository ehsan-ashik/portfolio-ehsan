'use client';

/**
 * Smart Input Wrapper
 * 
 * This component detects the active theme and exports the appropriate
 * Input implementation from the theme's component directory.
 */

import { useVisualTheme } from '@/themes/core/ThemeRegistry';
import * as React from "react";

// Import Input from each theme
import { Input as DefaultInput } from '@/themes/default/components/Input';
import { Input as GlassInput } from '@/themes/glass-refraction/components/Input';
import { Input as EmberInput } from '@/themes/obsidian-ember/components/Input';

/**
 * Input Component Registry
 * Maps theme IDs to their Input implementations
 */
const INPUT_REGISTRY = {
  'default': DefaultInput,
  'glass-refraction': GlassInput,
  'obsidian-ember': EmberInput,
} as const;

/**
 * Theme-aware Input component
 * Automatically uses the correct Input implementation based on active theme
 */
export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  (props, ref) => {
    const visualTheme = useVisualTheme();

    // Get Input from registry, fallback to default if theme not found
    const InputComponent = INPUT_REGISTRY[visualTheme as keyof typeof INPUT_REGISTRY] || INPUT_REGISTRY.default;

    return <InputComponent ref={ref} {...props} />;
  }
);

Input.displayName = "Input";
