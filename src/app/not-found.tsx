/** @format */

'use client';

import { memo } from 'react';
import Link from 'next/link';
import { Button } from 'antd';

export default memo(function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen space-y-4">
      <h1 className="text-6xl font-bold text-main m-0">404</h1>
      <p className="my-4 mx-0 text-2xl">Nội dung truy cập không tồn tại</p>
      <Link href="/">
        <Button type="primary" className="!rounded-3xl">
          Về trang chủ
        </Button>
      </Link>
    </div>
  );
});
