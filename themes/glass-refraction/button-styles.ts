/**
 * Glass-refraction theme button styling
 * Defines glassmorphic appearance for buttons
 */

export const glassButtonClasses = {
    // Additional classes for all buttons in glass theme
    base: 'shadow-lg shadow-black/5',

    // Glass-specific variant classes
    glass: 'backdrop-blur-md bg-background/70 border border-border/50 hover:bg-background/80 hover:-translate-y-0.5 transition-all duration-150',
};

// Map standard variants to glass equivalents
export const glassVariantOverrides: Record<string, string | undefined> = {
    // When default variant is used, apply glass variant instead
    'default': 'glass',
};
