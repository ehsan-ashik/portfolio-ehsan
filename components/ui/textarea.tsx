'use client';

/**
 * Smart Textarea Wrapper
 * 
 * This component detects the active theme and exports the appropriate
 * Textarea implementation from the theme's component directory.
 */

import { useVisualTheme } from '@/themes/core/ThemeRegistry';
import * as React from "react";

// Import Textarea from each theme
import { Textarea as DefaultTextarea } from '@/themes/default/components/Textarea';
import { Textarea as GlassTextarea } from '@/themes/glass-refraction/components/Textarea';

/**
 * Textarea Component Registry
 * Maps theme IDs to their Textarea implementations
 */
const TEXTAREA_REGISTRY = {
  'default': DefaultTextarea,
  'glass-refraction': GlassTextarea,
} as const;

/**
 * Theme-aware Textarea component
 * Automatically uses the correct Textarea implementation based on active theme
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  (props, ref) => {
    const visualTheme = useVisualTheme();

    // Get Textarea from registry, fallback to default if theme not found
    const TextareaComponent = TEXTAREA_REGISTRY[visualTheme as keyof typeof TEXTAREA_REGISTRY] || TEXTAREA_REGISTRY.default;

    return <TextareaComponent ref={ref} {...props} />;
  }
);

Textarea.displayName = "Textarea";
