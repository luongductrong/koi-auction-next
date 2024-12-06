/** @format */

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" className="border-main text-main hover:text-red-600" asChild>
        <Link href="/login">Đăng nhập</Link>
      </Button>
      <Button variant="default" className="bg-main hover:bg-red-600" asChild>
        <Link href="/register">Đăng ký</Link>
      </Button>
    </div>
  );
}
