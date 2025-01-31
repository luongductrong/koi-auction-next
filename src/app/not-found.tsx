import type { Metadata } from 'next';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center my-20 mx-auto">
      <h1 className="text-6xl text-primary font-bold m-0">404</h1>
      <p className="text-2xl my-4">Không tìm thấy trang bạn yêu cầu</p>
      <Link href="/" className="rounded-[20px] bg-primary text-white text-sm hover:bg-primary/90 leading-8 px-4">
        Về trang chủ
      </Link>
    </div>
  );
}

export const metadata: Metadata = {
  title: '404 - Không tìm thấy trang | Koi Auction',
  description: 'Không tìm thấy trang bạn yêu cầu',
};
