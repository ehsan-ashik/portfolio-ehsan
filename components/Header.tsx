'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/ui/Logo';
import { Nav } from './Nav';

export function Header() {
  return (
    <div className="flex justify-between items-center px-2 py-4 ">
      <Link href="/">
        <Logo />
      </Link>
      <Nav />
      <ThemeToggle />
    </div>
  );
}
