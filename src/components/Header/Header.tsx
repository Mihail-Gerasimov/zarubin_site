'use client';

import { BurgerIcon } from '@/src/ui-kit/BurgerIcon/BurgerIcon';
import { ContactUsBtn } from '@/src/ui-kit/LeagueLink/ContactUsBtn';
import { Logo } from '@/src/ui-kit/LogoIcon/Logo';
import { menuListLayer } from '@/src/utils/menuListLayer';
import useMediaQuery from '@/src/utils/useMediaQuery';
import { useEffect, useState } from 'react';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { MainList } from '../NavList/MainList';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery('<desktop-l');

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobile) return;
    setIsOpen(false);
  }, [isMobile]);

  return (
    <header className='fixed top-0 z-20 flex h-[80px] w-full items-center bg-white px-[10px] tablet:px-[40px] desktop:px-[80px]'>
      <Logo />
      <nav className='mx-[auto] w-full'>
        <MainList list={menuListLayer} />
      </nav>
      <ContactUsBtn />
      <MobileMenu isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <BurgerIcon isOpen={isOpen} setIsOpen={handleOpen} />
    </header>
  );
};
