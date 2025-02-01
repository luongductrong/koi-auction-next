import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const texts = {
  domTitle: 'Koi Auction | Nền tảng đấu giá cá Koi trực tuyến',
  domDescription: 'Koi Auction - Next.js',
  enableJavaScript: 'Vui lòng bật JavaScript để trang web hoạt động bình thường.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="html">
      <body
        className={`${montserrat.className} antialiased bg-white text-black dark:bg-black dark:text-white w-full min-h-screen`}
      >
        <AppHeader />
        {children}
        <AppFooter />
        <noscript>
          <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white text-center p-2">
            {texts.enableJavaScript}
          </div>
        </noscript>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: texts.domTitle,
  description: texts.domDescription,
};
