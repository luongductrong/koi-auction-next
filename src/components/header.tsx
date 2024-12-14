/** @format */

'use client';

import React from 'react';
import { Layout } from 'antd';
import HeaderLogo from './header-logo';
import HeaderMenu from './header-menu';
import HeaderSearch from './header-search';
import HeaderButtonGroup from './header-button-group';
import HeaderThemeLanguage from './header-theme-language-switcher';

const { Header } = Layout;

export default function CustomHeader() {
  return (
    <Header className="fixed top-0 left-0 z-50 w-screen min-h-min !bg-white shadow-md shadow-gray-200">
      <div className="relative block w-full">
        <div className="flex flex-row justify-between items-center w-full py-3 px-0">
          <HeaderLogo>Koi Auction</HeaderLogo>
          <HeaderSearch />
          <HeaderButtonGroup />
        </div>
        <div className="flex">
          <HeaderMenu />
          <HeaderThemeLanguage />
        </div>
      </div>
    </Header>
  );
}
