import { ContactUsBtn } from '@/src/ui-kit/LeagueLink/ContactUsBtn';
import { Logo } from '@/src/ui-kit/LogoIcon/Logo';
import { menuListLayer } from '@/src/utils/menuListLayer';
import { MainList } from '../NavList/MainList';

export const Header = () => {
  return (
    <header className='px-[10px] tablet:px-[40px] desktop:px-[80px] h-[84px] w-full tablet:h-[80px] desktop:h-[100px] flex items-center fixed top-0 z-20 bg-white'>
      <Logo />
      <nav className='mx-[auto] w-full px-[10px] tablet:px-[40px] desktop:px-[80px]'>
        <MainList list={menuListLayer} />
      </nav>
      <ContactUsBtn />
    </header>
  );
};
