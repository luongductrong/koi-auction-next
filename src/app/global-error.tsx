'use client';

import { useEffect } from 'react';

const texts = {
  title: 'Opps',
  message: 'Đã xảy ra lỗi khiến trang không hoạt động :))',
  buttonText: 'Thử lại',
};

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center text-center my-20 mx-auto">
          <h1 className="text-6xl font-bold m-0 text-primary">{texts.title}</h1>
          <p className="text-2xl my-4">{texts.message}</p>
          <button
            className="bg-primary hover:bg-primary/80 text-white text-sm leading-8 px-4 rounded-[20px]"
            onClick={() => reset()}
          >
            {texts.buttonText}
          </button>
        </div>
      </body>
    </html>
  );
}
