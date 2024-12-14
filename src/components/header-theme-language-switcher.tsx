/** @format */

'use client';

import React from 'react';
import { Switch, Dropdown, Space, type MenuProps } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { LanguageIcon } from './icon-language';

const languageItems: MenuProps['items'] = [
  {
    key: '1',
    label: 'Tiếng Việt',
  },
  {
    key: '2',
    label: 'English',
  },
];

export default function ThemeLanguageSwitcher() {
  const handleThemeChange = (checked: boolean) => {
    console.log('Theme changed:', checked ? 'dark' : 'light');
  };

  const handleLanguageChange: MenuProps['onClick'] = ({ key }) => {
    console.log('Language changed:', key);
  };

  return (
    <Space size="middle" className="h-auto !leading-10">
      <Dropdown menu={{ items: languageItems, onClick: handleLanguageChange }} placement="bottomRight">
        <span style={{ fontSize: '18px', cursor: 'pointer' }}>
          <LanguageIcon width="24px" height="24px" />
        </span>
      </Dropdown>
      <Switch checkedChildren={<MoonOutlined />} unCheckedChildren={<SunOutlined />} onChange={handleThemeChange} />
    </Space>
  );
}
