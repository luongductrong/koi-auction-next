/** @format */

import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export default function HeaderSearch() {
  return (
    <Search
      className="my-0 mx-16 max-w-[60%]"
      placeholder="Tìm kiếm..."
      onSearch={(value) => console.log(value)}
      loading={false}
    />
  );
}
