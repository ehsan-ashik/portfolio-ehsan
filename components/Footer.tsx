import { MontserratFont } from '@/app/fonts';
import React from 'react';

export function Footer() {
  return (
    <footer
      className={`${MontserratFont.className} text-center px-2 py-4 border-2 border-green-300`}
    >
      Copyright <span>&copy;</span> 2024 | Ehsan Ul Haque
    </footer>
  );
}
