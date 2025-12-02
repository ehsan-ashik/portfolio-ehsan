/**
 * Core type definitions for the theme engine system.
 * 
 * This file defines the extensible architecture for themes,
 * allowing progressive enhancement of features without breaking changes.
 */

// ============================================================================
// Core Theme Configuration
// ============================================================================

export interface ThemeConfig {
    // Metadata
    id: string;
    name: string;
    description: string;

    // Required features (Milestone 1)
    colors: ColorPalette;
    effects?: EffectsConfig;
    components?: ComponentTheme;

    // Future extensibility (Milestone 2+)
    typography?: TypographyConfig;
    spacing?: SpacingConfig;
    animations?: AnimationConfig;
    borders?: BorderConfig;
    shadows?: ShadowConfig;

    // Plugin system for custom extensions
    extensions?: Record<string, unknown>;
}

// ============================================================================
// Color System
// ============================================================================

export interface ColorPalette {
    light: ColorScheme;
    dark: ColorScheme;
}

export interface ColorScheme {
    // Base colors
    background: string;
    foreground: string;

    // Component colors
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;

    // Semantic colors
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;

    // UI elements
    border: string;
    input: string;
    ring: string;

    // Chart colors (preserving shadcn compatibility)
    chart1?: string;
    chart2?: string;
    chart3?: string;
    chart4?: string;
    chart5?: string;

    // Custom color tokens (extensible)
    custom?: Record<string, string>;
}

// ============================================================================
// Visual Effects (Milestone 1)
// ============================================================================

export interface EffectsConfig {
    // Backdrop blur settings
    blur?: {
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
    };

    // Opacity levels
    opacity?: Record<string, string>;

    // Enable backdrop-filter support
    backgroundBlur?: boolean;

    // Gradient configurations
    gradients?: {
        enabled: boolean;
        backgrounds?: string[];
    };
}

// ============================================================================
// Component Theming
// ============================================================================

export interface ComponentTheme {
    button?: ComponentVariantStyles;
    card?: ComponentVariantStyles;
    input?: ComponentVariantStyles;
    // Extensible for any component
    [key: string]: ComponentVariantStyles | undefined;
}

export interface ComponentVariantStyles {
    baseClasses?: string;
    variants?: Record<string, string>;
    customCSS?: string;
}

// ============================================================================
// Future: Typography System
// ============================================================================

export interface TypographyConfig {
    fontFamilies?: {
        sans?: string;
        serif?: string;
        mono?: string;
        display?: string;
    };

    fontSizes?: {
        xs?: string;
        sm?: string;
        base?: string;
        lg?: string;
        xl?: string;
        '2xl'?: string;
        '3xl'?: string;
        '4xl'?: string;
        '5xl'?: string;
        '6xl'?: string;
        '7xl'?: string;
        '8xl'?: string;
        '9xl'?: string;
    };

    fontWeights?: Record<string, number>;
    lineHeights?: Record<string, string>;
    letterSpacing?: Record<string, string>;
}

// ============================================================================
// Future: Spacing System
// ============================================================================

export interface SpacingConfig {
    scale: 'tight' | 'normal' | 'relaxed' | 'custom';
    customScale?: Record<string, string>;
}

// ============================================================================
// Future: Animation System
// ============================================================================

export interface AnimationConfig {
    durations?: {
        fast?: string;
        normal?: string;
        slow?: string;
    };

    easings?: {
        linear?: string;
        easeIn?: string;
        easeOut?: string;
        easeInOut?: string;
        bounce?: string;
    };

    animations?: Record<string, {
        keyframes: string;
        duration: string;
        timing: string;
    }>;
}

// ============================================================================
// Future: Border System
// ============================================================================

export interface BorderConfig {
    radius?: {
        none?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
        full?: string;
    };

    widths?: Record<string, string>;
}

// ============================================================================
// Future: Shadow System
// ============================================================================

export interface ShadowConfig {
    shadows?: Record<string, string>;
}

// ============================================================================
// Theme Registry
// ============================================================================

export interface ThemeRegistry {
    [themeId: string]: ThemeConfig;
}

// ============================================================================
// Theme Context
// ============================================================================

export interface ThemeContext {
    currentTheme: ThemeConfig;
    themeId: string;
    // Helper to get CSS variable name
    getCSSVar: (path: string) => string;
}
