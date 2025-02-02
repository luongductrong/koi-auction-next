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
    <html lang="en" className="html overflow-y-scroll scroll-smooth">
      <body className={`${montserrat.className} antialiased bg-bg text-txt w-full`}>
        <AppHeader />
        <main className="min-h-[56vh]">{children}</main>
        <AppFooter />
        <noscript>
          <div className="fixed bottom-0 left-0 right-0 z-100 bg-primary text-white text-center p-2">
            {texts.enableJavaScript}
          </div>
          <div className="h-10"></div>
        </noscript>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: texts.domTitle,
  description: texts.domDescription,
};
