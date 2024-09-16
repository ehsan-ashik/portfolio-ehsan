'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { RobotoSlab } from '@/app/fonts';

export function NavBar() {
  return (
    <div className="flex justify-between items-center px-2 py-4 border-2 border-blue-300">
      <Link href="/">
        <span
          className={`${RobotoSlab.className} antialiased font-bold transition duration-150 ease-in-out hover:no-underline hover:scale-110`}
        >
          Ehsan.
        </span>
      </Link>
      <div className="flex sm:gap-0 md:gap-2 lg:gap-8">
        <Link href="/">
          <Button variant="link" className="">
            Home
          </Button>
        </Link>
        <Link href="/projects">
          <Button variant="link">Projects</Button>
        </Link>
        <Link href="/about">
          <Button variant="link">About me</Button>
        </Link>
      </div>
      <ThemeToggle />
    </div>
  );
}
