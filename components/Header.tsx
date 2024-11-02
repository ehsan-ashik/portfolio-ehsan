'use client';
import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/ui/Logo';
import { Nav } from './Nav';

export function Header() {
  return (
    <div className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center px-2 py-4 ">
      <div className='flex-1'>
        <Logo />
      </div>
      <div className='flex-auto'>
        <Nav />
      </div>
      <div className='flex-1 ml-auto text-end'>
        <ThemeToggle />
      </div>
    </div>
  );
}
