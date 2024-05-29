import LightMainLogo from '@/public/assets/images/icons/second_logo.svg';
import TelegramIcon from '@/public/assets/images/icons/telegram.svg';
import { menuListLayer } from '@/src/utils/menuListLayer';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='flex w-full flex-col gap-[40px] bg-main-bg px-[10px] py-[40px] text-[14px] leading-[1.2] tablet:gap-[40px] tablet:px-[40px] tablet:py-[60px] desktop:gap-[88px] desktop:px-[75px] desktop:text-[18px] desktop:leading-[1.1]'>
      <div className='flex w-full flex-col gap-[60px] desktop:flex-row desktop:items-center desktop:justify-between'>
        <Link href='/'>
          <LightMainLogo className='h-[54px] w-[auto] tablet:h-[71px] desktop:h-[60px]' />
        </Link>
        <ul className='flex flex-col gap-[20px] tablet:flex-row'>
          {menuListLayer.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className='whitespace-nowrap font-proxima text-[16px] leading-[1.87] text-white'
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
          <a
            href='https://t.me/zarubin_vs'
            target='_blank'
            className='flex items-center gap-[12px] font-proxima text-[26px] text-white'
          >
            <TelegramIcon className='h-[auto] w-[30px]' />
            Contact us
          </a>
        </div>
      </div>
      <div className='w-full border-t-[2px] border-dark'>
        <span className='mb-[40px] block h-[2px] w-full bg-dark' />
        <ul className='flex flex-col gap-[20px] tablet:flex-row tablet:justify-between'>
          <li>
            <Link
              href='https://zarubin.co.uk/policy_en'
              className='font-proxima text-[16px] leading-[1.1] text-white opacity-50'
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <span className='font-proxima text-[16px] leading-[1.1] text-white opacity-50'>
              &copy; Zarubin&Co
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
};
