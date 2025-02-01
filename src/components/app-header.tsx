import { HeaderLogo } from '@/components/header-logo';
import { HeaderButton } from '@/components/header-button';
import { HeaderSearch } from '@/components/header-search';
import { HeaderMenu } from '@/components/header-menu';

const texts = {
  headerLogo: 'Koi Auction',
  searchPlaceholder: 'Tìm kiếm...',
};

export function AppHeader() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-4">
        <div className="relative block container mx-auto">
          <div className="flex justify-between w-full px-0 py-3">
            <HeaderLogo>{texts.headerLogo}</HeaderLogo>
            <HeaderSearch placeholder={texts.searchPlaceholder} />
            <HeaderButton />
          </div>
          <HeaderMenu />
        </div>
      </header>
      <div style={{ minHeight: '96px' }} className="_subHeader_1hamw_1"></div>
    </>
  );
}
