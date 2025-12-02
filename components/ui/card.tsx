'use client';

/**
 * Smart Card Wrapper
 * 
 * This component detects the active theme and exports the appropriate
 * Card implementation from the theme's component directory.
 */

import { useVisualTheme } from '@/themes/core/ThemeRegistry';

// Import Card components from each theme
import * as DefaultCard from '@/themes/default/components/Card';
import * as GlassCard from '@/themes/glass-refraction/components/Card';

/**
 * Card Component Registry
 * Maps theme IDs to their Card implementations
 */
const CARD_REGISTRY = {
  'default': DefaultCard,
  'glass-refraction': GlassCard,
} as const;

/**
 * Theme-aware Card components
 * Automatically uses the correct implementation based on active theme
 */

export function Card(props: React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>) {
  const visualTheme = useVisualTheme();
  const Component = CARD_REGISTRY[visualTheme as keyof typeof CARD_REGISTRY]?.Card || DefaultCard.Card;
  return <Component {...props} />;
}

export function CardHeader(props: React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>) {
  const visualTheme = useVisualTheme();
  const Component = CARD_REGISTRY[visualTheme as keyof typeof CARD_REGISTRY]?.CardHeader || DefaultCard.CardHeader;
  return <Component {...props} />;
}

export function CardFooter(props: React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>) {
  const visualTheme = useVisualTheme();
  const Component = CARD_REGISTRY[visualTheme as keyof typeof CARD_REGISTRY]?.CardFooter || DefaultCard.CardFooter;
  return <Component {...props} />;
}

export function CardTitle(props: React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>) {
  const visualTheme = useVisualTheme();
  const Component = CARD_REGISTRY[visualTheme as keyof typeof CARD_REGISTRY]?.CardTitle || DefaultCard.CardTitle;
  return <Component {...props} />;
}

export function CardDescription(props: React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>) {
  const visualTheme = useVisualTheme();
  const Component = CARD_REGISTRY[visualTheme as keyof typeof CARD_REGISTRY]?.CardDescription || DefaultCard.CardDescription;
  return <Component {...props} />;
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>) {
  const visualTheme = useVisualTheme();
  const Component = CARD_REGISTRY[visualTheme as keyof typeof CARD_REGISTRY]?.CardContent || DefaultCard.CardContent;
  return <Component {...props} />;
}
