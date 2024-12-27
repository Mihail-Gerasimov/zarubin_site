'use client';

import { BurgerIcon } from '@/src/ui-kit/BurgerIcon/BurgerIcon';
import { ContactUsBtn } from '@/src/ui-kit/LeagueLink/ContactUsBtn';
import { Logo } from '@/src/ui-kit/LogoIcon/Logo';
import { menuListLayer } from '@/src/utils/menuListLayer';
import { ISubmenu, Post } from '@/src/utils/types';
import useMediaQuery from '@/src/utils/useMediaQuery';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { MainList } from '../NavList/MainList';
import { Container } from '../shared/Container/Container';

const DynamicExpertiseMenu = dynamic(() =>
  import('../Expertise/ExpertiseSubMenu/ExpertiseSubMenu').then(
    (mod) => mod.ExpertiseSubMenu,
  ),
);

interface Props {
  expertiseSubmenu: ISubmenu[];
  expertiseMetadata: Post[];
}

export const Header = ({
  expertiseSubmenu = [],
  expertiseMetadata = [],
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(false);

  const handleChangeActiveMenu = (isActive: boolean) => {
    setActiveSubmenu(isActive);
  };

  const isMobile = useMediaQuery('<laptop-big');

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobile) return;
    setIsOpen(false);
  }, [isMobile]);

  return (
    <header
      onMouseLeave={() => handleChangeActiveMenu(false)}
      className={`sticky top-0 z-50 mx-auto h-[100px] w-full bg-main-bg`}
    >
      <Container
        className={`relative flex h-full items-center overflow-hidden bg-main-bg`}
      >
        <Logo />
        <nav className='mx-[auto] w-fit'>
          <MainList
            list={menuListLayer}
            activeSubmenu={activeSubmenu}
            onMenuItemHover={handleChangeActiveMenu}
          />
        </nav>
        <ContactUsBtn />
        {isMobile && (
          <>
            <MobileMenu
              isOpen={isOpen}
              onClick={() => setIsOpen(false)}
              expertiseSubMenu={expertiseSubmenu}
              data={expertiseMetadata}
            />
            <BurgerIcon isOpen={isOpen} setIsOpen={handleOpen} />
          </>
        )}
      </Container>

      <div
        className={`scrollbar-thin relative z-[-1] mx-[auto] max-h-[600px] w-fit transform overflow-y-scroll bg-main-bg px-[20px] transition-all duration-300 ease-in-out ${
          activeSubmenu ? 'translate-y-0' : '-translate-y-full'
        } ${isMobile ? 'hidden' : 'visible'}`}
      >
        <DynamicExpertiseMenu
          onClick={() => handleChangeActiveMenu(false)}
          expertiseSubMenu={expertiseSubmenu}
          expertiseMetadata={expertiseMetadata}
        />
      </div>
    </header>
  );
};
