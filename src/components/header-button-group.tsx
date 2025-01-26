/** @format */

import React from 'react';
import { Button, Dropdown, type MenuProps } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href="#">
        <UserOutlined /> Trung tâm tài khoản
      </Link>
    ),
    children: [
      {
        key: '1-1',
        label: <Link href="/account-center/profile">Thông tin tài khoản</Link>,
      },
      {
        key: '1-2',
        label: <Link href="/account-center/wallet">Ví của tôi</Link>,
      },
      {
        key: '1-3',
        label: <Link href="/account-center/schedule">Quản lý lịch</Link>,
      },
      {
        key: '1-4',
        label: <Link href="/account-center/order">Quản lý đơn hàng</Link>,
      },
      ...(true
        ? [
            {
              key: '1-5',
              label: <Link href="/account-center/auction">Quản lý đấu giá</Link>,
            },
            {
              key: '1-6',
              label: <Link href="/account-center/koi">Quản lý cá Koi</Link>,
            },
          ]
        : []),
    ],
  },
  {
    key: '2',
    label: (
      <Link href="login">
        <LogoutOutlined /> Đăng xuất
      </Link>
    ),
  },
];

export default function HeaderButtonGroup() {
  return (
    <div className="leading-normal">
      {false ? (
        <Dropdown menu={{ items }} trigger={['hover']} arrow>
          <Button type="primary">Tên người dùng</Button>
        </Dropdown>
      ) : (
        <>
          <Link href="/login">
            <Button type="primary" ghost>
              Đăng nhập
            </Button>
          </Link>
          <Link href="/register" className="ml-2.5">
            <Button type="primary">Đăng ký</Button>
          </Link>
        </>
      )}
    </div>
  );
}
