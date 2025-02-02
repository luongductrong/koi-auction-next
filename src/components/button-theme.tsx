'use client';

import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ButtonTheme() {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleThemeChange = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button onClick={handleThemeChange} className="p-2 rounded-sm cursor-pointer">
      {isDark ? <Moon className="h-5 w-5 text-gray-200" /> : <Sun className="h-5 w-5 text-gray-800" />}
    </button>
  );
}
