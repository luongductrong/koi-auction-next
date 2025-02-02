import { HeaderLogo } from '@/components/header-logo';
import { HeaderButton } from '@/components/header-button';
import { HeaderSearch } from '@/components/header-search';
import { HeaderMenu } from '@/components/header-menu';
import { ButtonLanguage } from '@/components/button-language';
import { ButtonTheme } from '@/components/button-theme';

const texts = {
  headerLogo: 'Koi Auction',
  searchPlaceholder: 'Tìm kiếm...',
};

export function AppHeader() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-2xs shadow-txt/20 px-4 bg-bg/80 backdrop-blur-xs backdrop-saturate-180">
        <div className="relative block container mx-auto">
          <div className="flex justify-between w-full px-0 py-3">
            <HeaderLogo>{texts.headerLogo}</HeaderLogo>
            <HeaderSearch placeholder={texts.searchPlaceholder} />
            <HeaderButton />
          </div>
          <div className="flex justify-between w-full">
            <HeaderMenu />
            <div className="flex items-center gap-2">
              <ButtonTheme />
              <ButtonLanguage />
            </div>
          </div>
        </div>
      </header>
      <div className="min-h-24 w-full"></div>
    </>
  );
}
