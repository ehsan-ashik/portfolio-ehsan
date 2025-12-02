"use client"
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { navitems } from '@/data/navdata';
import Link from 'next/link';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { ProfileCard } from './ProfileCard';

export function MobileNav() {
  const variants = {
    hidden: { right: '100%' },
    visible: { right: '0' }
  };

  const variants_selected = {
    hidden: { right: 0 },
    visible: { right: 0 }
  };

  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.addEventListener('resize', handleResize);;
  }, [])

  return (
    <nav className="flex items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu className="w-[1.2rem] h-[1.2rem] opacity-90 text-end" />
        </SheetTrigger>
        <SheetContent
          className="max-w-[36rem] flex flex-col items-center"
          style={{ backgroundImage: 'var(--theme-gradient)' }}
        >
          <SheetHeader>
            <SheetTitle className="scale-75">
              <ProfileCard />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Mobile Navigation Menu
            </SheetDescription>

            <div className="mt-8 flex flex-col gap-6 pl-2 text-left">
              {navitems.map((navitem) => (
                <Link
                  href={navitem.path}
                  key={navitem.name}
                  onClick={() => setOpen(false)}
                >
                  <motion.div
                    initial="hidden"
                    whileHover="visible"
                    transition={{
                      stiffness: 0,
                      type: 'spring',
                      bounce: 120,
                      delay: 0.2
                    }}
                    className="text-xl text-foreground opacity-80 inline-flex group relative"
                  >
                    {navitem.display}
                    {pathname === navitem.path ? (
                      <motion.div
                        variants={variants_selected}
                        initial="hidden"
                        animate="visible"
                        transition={{ stiffness: 0 }}
                        className="group absolute h-[.15rem] bg-primary left-0 bottom-0"
                      ></motion.div>
                    ) : null}
                    <motion.div
                      variants={variants}
                      className="group absolute h-[.15rem] bg-primary left-0 bottom-0"
                    ></motion.div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav >
  );
}
