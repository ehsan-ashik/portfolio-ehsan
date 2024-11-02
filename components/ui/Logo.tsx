import React from 'react';
import { CaveatFont } from '@/app/fonts';

export function Logo() {
  return (
    <div
      className={`${CaveatFont.className} text-lg md:text-xl lg:text-2xl relative antialiased font-bold text-slate-700 dark:text-slate-300`}
    >
      <span className="text-gray-700 dark:text-gray-100">E</span>
      <span className="text-gray-700 dark:text-gray-100">h</span>
      <span className="text-gray-600 dark:text-gray-200">s</span>
      <span className="text-gray-600 dark:text-gray-200">a</span>
      <span className="text-gray-500 dark:text-gray-300">n</span>
      <span className="text-gray-600 dark:text-gray-200"> U</span>
      <span className="text-gray-500 dark:text-gray-300">H</span>
      <span className="text-primary">.</span>
    </div>
  );
}
