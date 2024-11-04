import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto max-w-[75rem] flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-2">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
