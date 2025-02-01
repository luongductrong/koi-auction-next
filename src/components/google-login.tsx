'use client';

import Image from 'next/image';
import googleIcon from '@/assets/images/google.svg';

const texts = {
  buttonText: 'Đăng nhập bằng Google',
};

export function GoogleLogin() {
  return (
    <button
      className="w-full h-10 bg-white border border-gray-300 rounded-md flex items-center justify-evenly hover:bg-gray-100"
      onClick={() => console.log('Google login button clicked')}
    >
      <Image src={googleIcon} alt="Google icon" width="24" height="24" />
      <p className="text-sm">{texts.buttonText}</p>
    </button>
  );
}
