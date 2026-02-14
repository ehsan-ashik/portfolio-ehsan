import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { ThemeRegistry } from '@/themes/core/ThemeRegistry';
import { InterFont, SoraFont } from './fonts';

import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ehsan Ul Haque',
  description: 'Portfolio of Ehsan Ul Haque'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${InterFont.className} text-base antialiased bg-background text-foreground`}
        style={{ '--font-display': SoraFont.style.fontFamily } as React.CSSProperties}
      >
        <ThemeRegistry
          visualTheme="obsidian-ember"
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <div className="container mx-auto max-w-[75rem] flex flex-col min-h-screen">
            <main className="flex-1 p-2">{children}</main>
            <Footer />
          </div>
        </ThemeRegistry>
        <Toaster />
      </body>
    </html>
  );
}
