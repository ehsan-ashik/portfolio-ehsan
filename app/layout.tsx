import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { ThemeRegistry } from '@/themes/core/ThemeRegistry';
import { InterFont } from './fonts';

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
    <html lang="en">
      <body
        className={`${InterFont.className} text-base antialiased bg-background text-foreground`}
      >
        <ThemeRegistry
          visualTheme="glass-refraction"  // Switch to "glass-refraction" for glass theme
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="container mx-auto max-w-[75rem] flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-2">{children}</main>
            <Footer />
          </div>
        </ThemeRegistry>
        <Toaster />
      </body>
    </html>
  );
}
