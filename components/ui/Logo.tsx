import React from 'react';
import { CaveatFont } from '@/app/fonts';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div
      initial={{ rotateX: 360, scale: 0 }}
      animate={{ rotateX: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 1, type: 'spring', bounce: 0.6 }}
      className={`${CaveatFont.className} relative antialiased text-xl font-bold text-slate-700 dark:text-slate-300`}
      whileHover={{ scale: 1.1 }}
    >
      <span className="text-gray-700 dark:text-gray-100">E</span>
      <span className="text-gray-700 dark:text-gray-100">h</span>
      <span className="text-gray-600 dark:text-gray-200">s</span>
      <span className="text-gray-600 dark:text-gray-200">a</span>
      <span className="text-gray-500 dark:text-gray-300">n</span>
      <span className="text-gray-600 dark:text-gray-200"> U</span>
      <span className="text-gray-500 dark:text-gray-300">H</span>
      <span className="text-green-500 dark:text-green-400">.</span>
    </motion.div>
  );
}
