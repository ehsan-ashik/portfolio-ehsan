'use client';

/**
 * Smart Badge Wrapper
 * 
 * This component detects the active theme and exports the appropriate
 * Badge implementation from the theme's component directory.
 */

import { useVisualTheme } from '@/themes/core/ThemeRegistry';

// Import Badge from each theme
import {
  Badge as DefaultBadge,
  badgeVariants as defaultBadgeVariants,
  type BadgeProps
} from '@/themes/default/components/Badge';

import {
  Badge as GlassBadge,
  badgeVariants as glassBadgeVariants
} from '@/themes/glass-refraction/components/Badge';

// Export BadgeProps for consumer convenience
export type { BadgeProps };

/**
 * Badge Component Registry
 * Maps theme IDs to their Badge implementations
 */
const BADGE_REGISTRY = {
  'default': DefaultBadge,
  'glass-refraction': GlassBadge,
} as const;

const BADGE_VARIANTS_REGISTRY = {
  'default': defaultBadgeVariants,
  'glass-refraction': glassBadgeVariants,
} as const;

/**
 * Theme-aware Badge component
 * Automatically uses the correct Badge implementation based on active theme
 */
export function Badge(props: BadgeProps) {
  const visualTheme = useVisualTheme();

  // Get Badge from registry, fallback to default if theme not found
  const BadgeComponent = BADGE_REGISTRY[visualTheme as keyof typeof BADGE_REGISTRY] || BADGE_REGISTRY.default;

  return <BadgeComponent {...props} />;
}

/**
 * Export badgeVariants based on current theme
 * This is a convenience export for edge cases where direct variant access is needed
 */
export function useBadgeVariants() {
  const visualTheme = useVisualTheme();
  return BADGE_VARIANTS_REGISTRY[visualTheme as keyof typeof BADGE_VARIANTS_REGISTRY] || defaultBadgeVariants;
}

// For backward compatibility, export default badgeVariants
export const badgeVariants = defaultBadgeVariants;
