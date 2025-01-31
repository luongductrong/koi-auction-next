'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationMenu } from 'radix-ui';
import { List } from 'lucide-react';

const texts = {
  auctions: ' Cuộc đấu giá',
  home: 'Trang chủ',
  about: 'Về chúng tôi',
  contact: 'Liên hệ',
  blog: 'Blog',
  all_auctions: 'Tất cả cuộc đấu giá',
  scheduled_auction: 'Cuộc đấu giá sắp diễn ra',
  ongoing_auction: 'Cuộc đấu giá đang diễn ra',
  closed_auction: 'Cuộc đấu giá đã kết thúc',
};

const menuItems = [
  {
    label: texts.auctions,
    href: '#',
    icon: <List />,
    children: [
      { label: texts.all_auctions, href: '/auction' },
      { label: texts.scheduled_auction, href: '/auction?status=scheduled' },
      { label: texts.ongoing_auction, href: '/auction?status=ongoing' },
      { label: texts.closed_auction, href: '/auction?status=closed' },
    ],
  },
  { label: texts.home, href: '/' },
  { label: texts.about, href: '/about' },
  { label: texts.contact, href: '/contact' },
  { label: texts.blog, href: '/blog' },
];

export function HeaderMenu() {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root className="relative flex w-full justify-start">
      <NavigationMenu.List className="flex items-center list-none bg-white">
        {menuItems.map((item) => (
          <NavigationMenu.Item key={item.href}>
            {item.children ? (
              <NavigationMenu.Trigger className="group flex select-none items-center justify-start gap-1 pl-2 pr-50 py-2 text-sm font-medium bg-red-700 text-white">
                {item.icon}
                {item.label}
              </NavigationMenu.Trigger>
            ) : (
              <NavigationMenu.Link asChild>
                <Link
                  className={`block select-none mx-3 py-2 text-sm font-medium hover:text-red-700 ${
                    pathname === item.href ? 'text-red-700 border-b-2 border-red-700' : ''
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavigationMenu.Link>
            )}

            {item.children && (
              <NavigationMenu.Content className="absolute top-2 left-0">
                <ul className="w-full flex flex-col bg-white shadow-md p-2">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <NavigationMenu.Link asChild>
                        <Link className="w-56 inline-block select-none p-3 text-sm hover:bg-gray-200" href={child.href}>
                          {child.label}
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenu.Content>
            )}
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>

      <NavigationMenu.Viewport className="absolute top-[100%] left-0 w-full origin-top-center justify-center data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut sm:w-auto" />
    </NavigationMenu.Root>
  );
}
