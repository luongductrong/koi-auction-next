/** @format */

'use client';

import { Layout } from 'antd';

const { Content } = Layout;

interface CustomContentProps {
  children: React.ReactNode;
}

export default function CustomContent({ children }: CustomContentProps) {
  return (
    <Content className="w-screen min-h-min">
      <div className="py-12" />
      <div className="px-[50px]">{children}</div>
    </Content>
  );
}
