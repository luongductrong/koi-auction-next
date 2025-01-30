import Link from 'next/link';

const texts = {
  login: 'Đăng nhập',
  register: 'Đăng ký',
};

export function HeaderButton() {
  return (
    <div className="flex gap-x-2 text-sm">
      <Link href={`/login`}>
        <button className="leading-7.5 px-4 text-red-700 border border-red-700 rounded-sm">{texts.login}</button>
      </Link>
      <Link href="/register">
        <button className="leading-7.5 px-4 text-white bg-red-700 border rounded-sm">{texts.register}</button>
      </Link>
    </div>
  );
}
