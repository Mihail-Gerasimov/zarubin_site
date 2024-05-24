import TelegramIcon from '@/public/assets/images/icons/telegram.svg';
import { Logo } from '@/src/ui-kit/LogoIcon/Logo';
import { menuListLayer } from '@/src/utils/menuListLayer';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './MobileMenu.module.css';

interface Props {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: Props) => {
  return (
    <div className={classNames(styles.menuWeapper, isOpen && styles.active)}>
      <Logo />
      <div className={styles.content}>
        <div className={styles.listWrapper}>
          <ul className={styles.menuList}>
            {menuListLayer.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className={styles.menuLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contactWrapper}>
          <Link href='' className={styles.contactBtn}>
            Contact us
          </Link>
          <div className='flex flex-col gap-[12px]'>
            <Link
              href='mailto:hello@digitalburo.tech'
              className='text-[22px] text-main-black tablet:text-[32px]'
            >
              hello@digitalburo.tech
            </Link>
            <Link
              href='https://t.me/zarubin_vs'
              className='flex items-center gap-[12px] text-[16px] text-main-black tablet:text-[26px]'
            >
              <TelegramIcon className='w-[30px] h-[auto]' />
              Свяжитесь с нами в Telegram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
