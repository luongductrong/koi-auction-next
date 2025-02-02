'use client';

import { useState, useEffect } from 'react';
import { Languages, ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'vi-VN', name: 'Tiếng Việt' },
  { code: 'en-US', name: 'English' },
  { code: 'ja-JP', name: '日本語' },
  { code: 'zh-CN', name: '中文' },
  { code: 'th-TH', name: 'ภาษาไทย' },
];

export function ButtonLanguage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const handleLanguageChange = (lng: string) => {
    console.log('Change language to', lng);
    setCurrentLanguage(languages.find((lang) => lang.code === lng) || languages[0]);
    setIsOpen(false);
  };

  // Add click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.lang-dropdown')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative lang-dropdown text-sm">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 p-2 rounded-sm cursor-pointer">
        <Languages className="h-5 w-5 text-txt" />
        <span className="text-txt whitespace-nowrap">{currentLanguage.name}</span>
        <ChevronDown
          className={`h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-float shadow-md focus:outline-none z-10 dark:border dark:border-gray-400">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2 text-txt hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ${
                  currentLanguage.code === lang.code ? 'bg-gray-100 dark:bg-gray-700' : ''
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
