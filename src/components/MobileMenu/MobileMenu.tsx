import Arrow from '@/public/assets/images/icons/arrow.svg';
import { Logo } from '@/src/ui-kit/LogoIcon/Logo';
import { menuListLayer } from '@/src/utils/menuListLayer';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { ExpertiseMobileSubMenu } from '../Expertise/ExpertiseSubMenu/ExpertiseMobileSubMenu';
import styles from './MobileMenu.module.css';

interface Props {
  isOpen: boolean;
  onClick: () => void;
  dark?: boolean;
  expertiseSubMenu: Submenu[];
}

interface Submenu {
  name: string;
  folderItems: { nameItem: string; link: string }[];
}

export const MobileMenu = ({
  isOpen,
  onClick,
  dark = true,
  expertiseSubMenu,
}: Props) => {
  const [isOpenSubMenu, setIsOpenSubmenu] = useState(isOpen);

  const onContactLinkClick = () => {
    onClick();
    document
      .getElementById('contact-form')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={classNames(
        styles.menuWrapper,
        dark ? styles.dark : styles.light,
        isOpen && styles.active,
      )}
    >
      <Logo dark={dark} />
      <div className={styles.content}>
        <div className={styles.listWrapper}>
          <ul className={styles.menuList}>
            {menuListLayer.map((item) => (
              <li key={item.id} className='flex flex-col'>
                <div className='w-100 flex items-center justify-between gap-[10px]'>
                  <Link
                    href={item.link}
                    className={`${styles.menuLink} ${dark ? styles.dark : styles.light} font-proxima`}
                    onClick={onClick}
                  >
                    {item.name}
                  </Link>
                  {item.name.toLowerCase() === 'expertise' && (
                    <button
                      type='button'
                      onClick={() => setIsOpenSubmenu(!isOpenSubMenu)}
                      className={`${isOpenSubMenu ? (dark ? 'bg-gray-500' : 'bg-gray-300') : dark ? 'bg-gray-900' : 'bg-gray-100'} h-fit w-fit rounded-md transition-colors`}
                    >
                      <Arrow
                        className={`h-[auto] w-[25px] transition-transform duration-300 ease-in-out ${dark ? 'fill-white' : 'fill-main-bg'} ${isOpenSubMenu ? '-rotate-[-90deg]' : 'rotate-30'}`}
                      />
                    </button>
                  )}
                </div>
                {item.name.toLowerCase() === 'expertise' && (
                  <div
                    className={`${isOpenSubMenu ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}
                  >
                    <ExpertiseMobileSubMenu
                      expertiseSubMenu={expertiseSubMenu}
                      onMenuClose={onClick}
                      dark={dark}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contactWrapper}>
          <Link
            href='#contact-form'
            onClick={onContactLinkClick}
            className={`${styles.contactBtn} ${dark ? styles.dark : styles.light} font-proxima text-[20px] font-bold leading-[1]`}
          >
            Contact us
          </Link>
          <div className='flex flex-col gap-[12px]'>
            <Link
              href='mailto:access@thebrightbyte.com '
              className={`${dark ? 'text-white' : 'text-main-black'} font-proxima text-[22px] font-bold leading-[1.1] tablet:text-[32px]`}
            >
              access@thebrightbyte.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
