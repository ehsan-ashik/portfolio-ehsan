'use client';
import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/ui/Logo';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <div className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-md border-b border-border/50 flex items-center px-2 py-5 gap-3">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-auto hidden lg:block">
        <Nav />
      </div>
      <div className="flex-1 ml-auto text-end">
        <ThemeToggle />
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
