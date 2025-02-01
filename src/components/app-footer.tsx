'use client';

import Link from 'next/link';

const texts = {
  vietnameese: 'Tiếng Việt',
  english: 'English',
  japanese: '日本語',
  chinese: '中文',
  thai: 'ภาษาไทย',
  email: 'Email: aaaaaaa@bbbbbbb.ccc',
  phone: 'Điện thoại: +84 000 000 000',
  privacyPolicy: 'Chính sách bảo mật',
  termsOfService: 'Điều khoản dịch vụ',
  refundPolicy: 'Chính sách hoàn trả',
  author: 'Lượng Đức Trọng',
  poweredBy: 'Powered by ',
  nextjs: 'Next.js',
};

const authorLink = 'https://github.com/luongductrong';

export function AppFooter() {
  const changeLanguage = (lng: string) => {
    console.log('Change language to', lng);
  };

  return (
    <footer className="w-full inline-flex justify-center bg-gray-800 p-0 mt-10 bg-[url(/footer.jpeg)] bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="w-full bg-black/70">
        <div className="container block py-5 px-0 text-gray-300 text-sm font-medium h-50 mx-auto">
          <div className="flex justify-center pb-4 border-b border-gray-600 space-x-4">
            <p className="text-red-500 drop-shadow-[2px_2px_4px_#333]" onClick={() => changeLanguage('vi-VN')}>
              {texts.vietnameese}
            </p>
            <p className="cursor-pointer" onClick={() => changeLanguage('en-US')}>
              {texts.english}
            </p>
            <p className="cursor-pointer" onClick={() => changeLanguage('ja-JP')}>
              {texts.japanese}
            </p>
            <p className="cursor-pointer" onClick={() => changeLanguage('zh-CN')}>
              {texts.chinese}
            </p>
            <p className="cursor-pointer" onClick={() => changeLanguage('th-TH')}>
              {texts.thai}
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <p>{texts.email}</p>
            <p>{texts.phone}</p>
          </div>

          <div className="flex justify-center space-x-4 text-blue-500">
            <Link href="/policy?tab=privacy">{texts.privacyPolicy}</Link>
            <Link href="/policy?tab=terms">{texts.termsOfService}</Link>
            <Link href="/policy?tab=refund">{texts.refundPolicy}</Link>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2 mt-4">
            <p>
              <span>&copy; {new Date().getFullYear() || 2025}</span>
              {/* prettier-ignore */}
              <a href={authorLink} className='underline hover:text-blue-500'>{' '}{texts.author}</a>
            </p>
            <p>
              {texts.poweredBy}
              <a href="https://nextjs.org" className="underline hover:text-blue-500">
                {texts.nextjs}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Will move to server component in the future
