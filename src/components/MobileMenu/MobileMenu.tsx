import { Logo } from '@/src/ui-kit/LogoIcon/Logo';
import { menuListLayer } from '@/src/utils/menuListLayer';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import styles from './MobileMenu.module.css';
import { Post } from '@/src/utils/types';
import { ExpertiseSubmenuArticles } from '../Expertise/ExpertiseSubMenu/ExpertiseSubmenuArticles/ExpertiseSubMenuArticles';
import { ExpertiseSubMenuList } from '../Expertise/ExpertiseSubMenu/ExpertiseSubmenuArticles/ExpertiseSubMenuList';
import { ContactWrapper } from './ContactWrapper/ContactWrapper';
import Arrow from '@/public/assets/images/icons/arrow.svg';

interface Props {
  isOpen: boolean;
  onClick: () => void;
  dark?: boolean;
  expertiseSubMenu: Submenu[];
  data: Post[];
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
  data,
}: Props) => {
  const [isOpenExpertiseSubMenu, setIsOpenexpertiseSubmenu] = useState(isOpen);

  return (
    <div
      className={classNames(
        styles.menuWrapper,
        dark ? styles.dark : styles.light,
        isOpen && styles.active,
      )}
    >
      <div className='pb-[20px]'>
        <Logo dark={dark} />
      </div>
      <div className={`${styles.content}`}>
        <div
          className={`w-full duration-300 ${isOpenExpertiseSubMenu ? 'opacity-0' : 'opacity-1'}`}
        >
          <ul className={styles.menuList}>
            {menuListLayer.map((item) => (
              <li key={item.id} className='flex flex-col'>
                <div className='w-100 flex items-center justify-between gap-[10px]'>
                  {item.name.toLowerCase() !== 'expertise' ? (
                    <Link
                      href={item.link}
                      className={`${styles.menuLink} ${dark ? styles.dark : styles.light} font-proxima`}
                      onClick={onClick}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      type='button'
                      onClick={() =>
                        setIsOpenexpertiseSubmenu(!isOpenExpertiseSubMenu)
                      }
                      className={`${styles.menuLink} ${dark ? styles.dark : styles.light} font-proxima`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`absolute top-[40px] flex w-full flex-col gap-[24px] overflow-auto bg-main-bg pb-[60px] duration-300 tablet:gap-[40px] ${isOpenExpertiseSubMenu ? 'left-0' : 'left-[-100%]'}`}
        >
          <div>
            <button
              type='button'
              onClick={() => setIsOpenexpertiseSubmenu(false)}
              className='flex items-center gap-[12px] font-unbound text-[18px] font-bold uppercase tablet:text-[20px]'
            >
              <Arrow className='h-[26px] w-[26px] rotate-[180deg] fill-white' />
              Expertise
            </button>
            <ExpertiseSubMenuList data={expertiseSubMenu} onClick={onClick} />
          </div>
          <ExpertiseSubmenuArticles data={data} />
          <div className='mt-[40px]'>
            <ContactWrapper onClick={onClick} />
          </div>
        </div>
        <div className='mt-[auto] pb-[40px]'>
          <ContactWrapper onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
