"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { type VariantProps } from "class-variance-authority"
import { useVisualTheme } from '@/themes/core/ThemeRegistry';

// Import Toast components from each theme
import * as DefaultToast from '@/themes/default/components/Toast';
import * as GlassToast from '@/themes/glass-refraction/components/Toast';

/**
 * Toast Component Registry
 */
const TOAST_REGISTRY = {
  'default': DefaultToast,
  'glass-refraction': GlassToast,
} as const;

// Helper to get the current theme's components
function useToastComponents() {
  const visualTheme = useVisualTheme();
  return TOAST_REGISTRY[visualTheme as keyof typeof TOAST_REGISTRY] || TOAST_REGISTRY.default;
}

const ToastProvider = (props: React.ComponentProps<typeof ToastPrimitives.Provider>) => {
  const Components = useToastComponents();
  return <Components.ToastProvider {...props} />;
}

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>((props, ref) => {
  const Components = useToastComponents();
  return <Components.ToastViewport ref={ref} {...props} />;
})
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  VariantProps<any>
>((props, ref) => {
  const Components = useToastComponents();
  return <Components.Toast ref={ref} {...props} />;
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>((props, ref) => {
  const Components = useToastComponents();
  return <Components.ToastAction ref={ref} {...props} />;
})
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>((props, ref) => {
  const Components = useToastComponents();
  return <Components.ToastClose ref={ref} {...props} />;
})
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>((props, ref) => {
  const Components = useToastComponents();
  return <Components.ToastTitle ref={ref} {...props} />;
})
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>((props, ref) => {
  const Components = useToastComponents();
  return <Components.ToastDescription ref={ref} {...props} />;
})
ToastDescription.displayName = ToastPrimitives.Description.displayName

// Export types from default theme (assuming they are compatible)
export type ToastProps = DefaultToast.ToastProps;
export type ToastActionElement = DefaultToast.ToastActionElement;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
