import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';

/**
 * Default theme button styling
 * Uses standard shadcn button appearance
 */

export const defaultButtonClasses = {
    // No additional classes needed - uses base buttonVariants
    base: '',
    glass: '', // Not used in default theme
};

export type DefaultButtonVariant = VariantProps<typeof buttonVariants>['variant'];
