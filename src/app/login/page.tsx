import Link from 'next/link';
import { type Metadata } from 'next';
import { LoginForm } from '@/components/login-form';
import { GoogleLogin } from '@/components/google-login';

const texts = {
  domTitle: 'Đăng nhập | Koi Auction',
  domDescription: 'Đăng nhập vào Koi Auction',
  title: 'Đăng nhập',
  forgotPassword: 'Quên mật khẩu',
  register: 'Đăng ký',
};

export default function LoginPage() {
  return (
    <div className="login-container flex items-center justify-center h-[90vh]">
      <div className="login-form w-80 flex flex-wrap items-center justify-around p-4 bg-bg rounded-lg shadow-lg shadow-txt/10 dark:border dark:border-gray-400">
        <h2 className="text-2xl font-bold text-center text-primary dark:text-txt/90 mb-5">{texts.title}</h2>
        <LoginForm />
        <GoogleLogin />
        <Link
          href="/forgot-password"
          className="inline-block mt-4 text-sm text-blue-600 dark:text-blue-500 hover:underline"
        >
          {texts.forgotPassword}
        </Link>
        <Link href="/register" className="inline-block mt-4 text-sm text-blue-600 dark:text-blue-500 hover:underline">
          {texts.register}
        </Link>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: texts.domTitle,
  description: texts.domDescription,
};
