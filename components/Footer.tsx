import { MontserratFont } from '@/app/fonts';
import React from 'react';

export function Footer() {
  return (
    <footer
      className={`${MontserratFont.className} text-sm text-center px-2 py-4`}
    >
      Copyright <span>&copy;</span> 2024 | Ehsan Ul Haque
    </footer>
  );
}
