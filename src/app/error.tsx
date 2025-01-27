'use client';

import { useEffect } from 'react';
import { ConfigProvider, Button } from 'antd';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
        <h1 className="text-4xl font-bold m-0 ">Opps</h1>
        <p className="text-2xl my-4">Đã xảy ra lỗi khiến trang không hoạt động :))</p>
        <Button type="primary" onClick={() => reset()}>
          Thử lại
        </Button>
      </div>
    </ConfigProvider>
  );
}
