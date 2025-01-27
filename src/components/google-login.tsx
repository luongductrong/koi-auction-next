'use client';

import Image from 'next/image';
import { Button } from 'antd';
import googleIcon from '@/assets/images/google.svg';

export function GoogleLogin() {
  return (
    <Button
      type="default"
      htmlType="button"
      className="w-full !h-10"
      onClick={() => console.log('Google login button clicked')}
      loading={false}
    >
      <span className="w-full flex items-center justify-evenly">
        <Image src={googleIcon} alt="Google icon" width="24" height="24" />
        <p>Đăng nhập bằng Google</p>
      </span>
    </Button>
  );
}
