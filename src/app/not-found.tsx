import { memo } from 'react';
import Link from 'next/link';
import { Button, ConfigProvider } from 'antd';

function NotFound() {
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
        <p className="text-2xl my-4">Nội dung truy cập không tồn tại</p>
        <Link href="/">
          <Button type="primary">Về trang chủ</Button>
        </Link>
      </div>
    </ConfigProvider>
  );
}

export default memo(NotFound);
