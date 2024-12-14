/** @format */

import React from 'react';
import { type Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#b41712',
                  borderRadius: 4,
                  fontFamily: "'Montserrat', sans-serif",
                },
              }}
            >
              <div className="jnksdhadkjaskjdasjh">{children}</div>
            </ConfigProvider>
          </AntdRegistry>
        </NextThemesProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: 'Koi Auction',
    template: '%s | Koi Auction',
  },
  description: 'Explore and bid on beautiful koi fish at Koi Auction.',
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'apple-touch-icon', url: '/favicon.png' },
  ],
};
