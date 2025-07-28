import { MontserratFont } from '@/app/fonts';
import React from 'react';

export function Footer() {
  return (
    <footer
      className={`${MontserratFont.className} min-h-16 text-sm py-2 flex justify-center items-center text-muted-foreground`}
    >
      Ehsan Ul Haque | &copy; 2025
    </footer>
  );
}
