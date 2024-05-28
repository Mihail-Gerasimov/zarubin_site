import LightMainLogo from '@/public/assets/images/icons/second_logo.svg';
import TelegramIcon from '@/public/assets/images/icons/telegram.svg';
import { menuListLayer } from '@/src/utils/menuListLayer';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='w-full px-[10px] py-[40px] bg-main-bg flex flex-col gap-[40px] text-[14px] leading-[1.2] tablet:px-[40px] tablet:py-[60px] tablet:gap-[40px] desktop:gap-[88px] desktop:text-[18px] desktop:leading-[1.1] desktop:px-[75px]'>
      <div className='w-full flex flex-col gap-[60px] desktop:flex-row desktop:items-center desktop:justify-between'>
        <a href='https://zarubin.co.uk/' target='_blank'>
          <LightMainLogo className='w-[auto] h-[54px] tablet:h-[71px] desktop:h-[60px]' />
        </a>
        <ul className='flex flex-col gap-[20px] tablet:flex-row'>
          {menuListLayer.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className='font-proxima text-[16px] text-white leading-[1.87] whitespace-nowrap'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex flex-col gap-[12px]'>
          <Link
            href='mailto:hello@digitalburo.tech'
            className='font-proxima text-[26px] text-white'
          >
            hello@digitalburo.tech
          </Link>
          <Link
            href='https://t.me/zarubin_vs'
            target='_blank'
            className='font-proxima flex items-center gap-[12px] text-[26px] text-white'
          >
            <TelegramIcon className='w-[30px] h-[auto]' />
            Contact us
          </Link>
        </div>
      </div>
      <div className='w-full border-t-[2px] border-dark'>
        <span className='mb-[40px] w-full block h-[2px] bg-dark' />
        <ul className='flex flex-col gap-[20px] tablet:flex-row tablet:justify-between'>
          <li>
            <Link
              href='https://zarubin.co.uk/policy_en'
              className='font-proxima text-[16px] text-white leading-[1.1] opacity-50'
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='font-proxima text-[16px] text-white leading-[1.1] opacity-50'
            >
              &copy; Zarubin&Co
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
