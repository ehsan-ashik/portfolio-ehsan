'use client';

import { useRef, useEffect } from 'react';
import { ReactNode } from 'react';
import { useInView } from 'framer-motion';

type LayoutProps = { children?: ReactNode };

export function MotionProvider({ children, ...props }: LayoutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(20px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s'
      }}
      {...props}
    >
      {children}
    </section>
  );
}
