import { memo } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, ConfigProvider } from 'antd';

export default memo(function NotFound() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            borderRadius: 20,
          },
        },
      }}
    >
      <div className="flex flex-col items-center justify-center text-center my-20 mx-auto">
        <h1 className="text-6xl font-bold m-0 ">404</h1>
        <p className="text-2xl my-4">Không tìm thấy trang bạn yêu cầu</p>
        <Link href="/">
          <Button type="primary">Về trang chủ</Button>
        </Link>
      </div>
    </ConfigProvider>
  );
});

export const metadata: Metadata = {
  title: '404 - Không tìm thấy trang | Koi Auction',
  description: 'Không tìm thấy trang bạn yêu cầu',
};
