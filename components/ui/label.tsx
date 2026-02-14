"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { type VariantProps } from "class-variance-authority"
import { useVisualTheme } from '@/themes/core/ThemeRegistry';

// Import Label from each theme
import { Label as DefaultLabel } from '@/themes/default/components/Label';
import { Label as GlassLabel } from '@/themes/glass-refraction/components/Label';
import { Label as EmberLabel } from '@/themes/obsidian-ember/components/Label';

/**
 * Label Component Registry
 * Maps theme IDs to their Label implementations
 */
const LABEL_REGISTRY = {
  'default': DefaultLabel,
  'glass-refraction': GlassLabel,
  'obsidian-ember': EmberLabel,
} as const;

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  VariantProps<any> // Using any here as variants might differ slightly, but props are compatible
>(({ className, ...props }, ref) => {
  const visualTheme = useVisualTheme();

  // Get Label from registry, fallback to default if theme not found
  const LabelComponent = LABEL_REGISTRY[visualTheme as keyof typeof LABEL_REGISTRY] || LABEL_REGISTRY.default;

  return <LabelComponent ref={ref} className={className} {...props} />;
})
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
