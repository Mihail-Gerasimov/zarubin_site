import { Logo } from '@/src/ui-kit/LogoIcon/Logo';
import { menuListLayer } from '@/src/utils/menuListLayer';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './MobileMenu.module.css';

interface Props {
  isOpen: boolean;
  onClick: () => void;
  dark?: boolean;
}

export const MobileMenu = ({ isOpen, onClick, dark = true }: Props) => {
  return (
    <div
      className={classNames(
        styles.menuWeapper,
        dark ? styles.dark : styles.light,
        isOpen && styles.active,
      )}
    >
      <Logo dark={dark} />
      <div className={styles.content}>
        <div className={styles.listWrapper}>
          <ul className={styles.menuList}>
            {menuListLayer.map((item) => (
              <li key={item.id} onClick={onClick}>
                <Link
                  href={item.link}
                  className={`${styles.menuLink} ${dark ? styles.dark : styles.light} font-proxima`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contactWrapper}>
          <Link
            href=''
            className={`${styles.contactBtn} ${dark ? styles.dark : styles.light} font-proxima text-[20px] font-bold leading-[1]`}
          >
            Contact us
          </Link>
          <div className='flex flex-col gap-[12px]'>
            <Link
              href='mailto:vitaliy@zarubin.co.uk'
              className={`${dark ? 'text-white' : 'text-main-black'} font-proxima text-[22px] font-bold leading-[1.1] tablet:text-[32px]`}
            >
              vitaliy@zarubin.co.uk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
