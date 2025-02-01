import Link from 'next/link';
import { type Metadata } from 'next';
import { LoginForm } from '@/components/login-form';
import { GoogleLogin } from '@/components/google-login';

export default function LoginPage() {
  return (
    <div className="login-container flex items-center justify-center h-[90vh]">
      <div className="login-form w-80 flex flex-wrap items-center justify-around p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-primary mb-5">Đăng nhập</h2>
        <LoginForm />
        <GoogleLogin />
        <Link href="/forgot-password" className="inline-block mt-4 text-sm text-blue-600 hover:underline">
          Quên mật khẩu
        </Link>
        <Link href="/register" className="inline-block mt-4 text-sm text-blue-600 hover:underline">
          Đăng ký
        </Link>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Đăng nhập | Koi Auction',
  description: 'Đăng nhập vào Koi Auction',
};
