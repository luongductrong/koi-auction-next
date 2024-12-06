/** @format */

'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';

interface SearchProps {
  placeholder?: string;
}

export default function Search({ placeholder }: SearchProps) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder={placeholder} className="w-full" />
      <Button type="submit" size="icon" variant="ghost">
        <SearchIcon className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  );
}
