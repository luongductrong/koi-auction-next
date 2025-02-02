'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface HeaderSearchProps {
  placeholder: string;
}

export function HeaderSearch({ placeholder }: HeaderSearchProps) {
  const [searchValue, setSearchValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSearch = () => {
    if (searchValue) {
      console.log('Search value:', searchValue);
    }
  };

  return (
    <div className="group flex items-center w-6/10 justify-between border rounded-sm pl-2 border-stone-300 focus-within:border-primary hover:border-primary">
      <input
        type="text"
        className="w-9/10 focus:outline-none text-sm text-txt/80 focus:text-txt"
        placeholder={placeholder}
        onChange={onChange}
      />
      <Search
        className="p-2 text-txt group-focus-within:text-primary hover:text-red-500 hover:cursor-pointer"
        onClick={onSearch}
        size={32}
      />
    </div>
  );
}

// Built without Ant Design
