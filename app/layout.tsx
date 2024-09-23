import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { OpenSans } from './fonts';

import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Portfolio | Ehsan Ul Haque',
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
        className={`${OpenSans.className} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="md:container md:mx-auto flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-2">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
