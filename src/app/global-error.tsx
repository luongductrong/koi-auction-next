'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center text-center my-20 mx-auto">
          <h1 className="text-6xl font-bold m-0 text-primary">Opps</h1>
          <p className="text-2xl my-4">Đã xảy ra lỗi khiến trang không hoạt động :))</p>
          <button
            className="bg-primary hover:bg-primary/80 text-white text-sm leading-8 px-4 rounded-[20px]"
            onClick={() => reset()}
          >
            Thử lại
          </button>
        </div>
      </body>
    </html>
  );
}
