import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

import { AppHeader } from '@/components/app-header';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const texts = {
  domTitle: 'Koi Auction | Nền tảng đấu giá cá Koi trực tuyến',
  domDescription: 'Koi Auction - Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="html">
      <body
        className={`${montserrat.className} antialiased bg-white text-black dark:bg-black dark:text-white w-screen h-screen px-4`}
      >
        <AppHeader />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: texts.domTitle,
  description: texts.domDescription,
};
