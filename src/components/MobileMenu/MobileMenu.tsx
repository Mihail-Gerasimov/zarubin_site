import TelegramIcon from '@/public/assets/images/icons/telegram.svg';
import { Logo } from '@/src/ui-kit/LogoIcon/Logo';
import { menuListLayer } from '@/src/utils/menuListLayer';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './MobileMenu.module.css';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenu = ({ isOpen, onClick }: Props) => {
  return (
    <div className={classNames(styles.menuWeapper, isOpen && styles.active)}>
      <Logo />
      <div className={styles.content}>
        <div className={styles.listWrapper}>
          <ul className={styles.menuList}>
            {menuListLayer.map((item) => (
              <li key={item.id} onClick={onClick}>
                <Link
                  href={item.link}
                  className={`${styles.menuLink} font-proxima`}
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
            className={`${styles.contactBtn} font-proxima text-[20px] font-bold leading-[1]`}
          >
            Contact us
          </Link>
          <div className='flex flex-col gap-[12px]'>
            <Link
              href='mailto:hello@digitalburo.tech'
              className='text-main-black font-proxima text-[22px] font-bold leading-[1.1] tablet:text-[32px]'
            >
              hello@digitalburo.tech
            </Link>
            <Link
              href='https://t.me/zarubin_vs'
              className='text-main-black flex items-center gap-[12px] font-proxima text-[16px] tablet:text-[26px]'
            >
              <TelegramIcon className='h-[auto] w-[30px] text-[16px] leading-[1.25]' />
              Свяжитесь с нами в Telegram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
