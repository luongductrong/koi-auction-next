/** @format */

import { Menu as AntMenu } from 'antd';
import { type MenuProps } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

export default function Menu() {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  const menuItems: MenuItem[] = [
    {
      key: 'sub1',
      label: (
        <p className="font-medium pr-48">
          <UnorderedListOutlined /> Cuộc đấu giá
        </p>
      ),
      children: [
        { key: 'all', label: <Link href="/auction">Tất cả đấu giá</Link> },
        { key: 'schedule', label: <Link href="/auction?status=scheduled">Đấu giá sắp diễn ra</Link> },
        { key: 'current', label: <Link href="/auction?status=ongoing">Đấu giá đang diễn ra</Link> },
        { key: 'past', label: <Link href="/auction?status=closed">Đấu giá đã kết thúc</Link> },
      ],
      type: 'submenu',
    },
    { key: '/', label: <Link href="/">Trang chủ</Link> },
    { key: '/about', label: <Link href="/about">Giới thiệu</Link> },
    { key: '/contact', label: <Link href="/contact">Liên hệ</Link> },
    { key: '/blog', label: <Link href="/blog">Blog</Link> },
  ];

  return <AntMenu mode="horizontal" className="h-auto leading-10" items={menuItems} selectedKeys={[currentPath]} />;
}
