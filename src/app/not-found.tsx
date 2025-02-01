import type { Metadata } from 'next';
import Link from 'next/link';

const texts = {
  domTitle: '404 - Không tìm thấy trang | Koi Auction',
  domDescription: 'Không tìm thấy trang bạn yêu cầu',
  title: '404',
  message: 'Không tìm thấy trang bạn yêu cầu',
  buttonText: 'Về trang chủ',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center my-20 mx-auto">
      <h1 className="text-6xl text-primary font-bold m-0">{texts.title}</h1>
      <p className="text-2xl my-4">{texts.message}</p>
      <Link href="/" className="rounded-[20px] bg-primary text-white text-sm hover:bg-primary/80 leading-8 px-4">
        {texts.buttonText}
      </Link>
    </div>
  );
}

export const metadata: Metadata = {
  title: texts.domTitle,
  description: texts.domDescription,
};
