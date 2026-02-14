import React from 'react';

export function Footer() {
  return (
    <footer
      className="min-h-20 text-xs py-6 flex justify-center items-center text-muted-foreground/60 border-t border-border/50 tracking-wide uppercase"
      style={{ fontFamily: 'var(--font-display)' }}
    >
      Ehsan Ul Haque &middot; {new Date().getFullYear()}
    </footer>
  );
}
