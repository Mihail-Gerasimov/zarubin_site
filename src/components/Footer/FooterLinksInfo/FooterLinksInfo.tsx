import LightMainLogo from '@/public/assets/images/icons/footer_logo_dark.svg';
import LinkedInIcon from '@/public/assets/images/icons/linkedin.svg';
import Link from 'next/link';
import { AddressInfo } from './AddressInfo';

export const FooterLinksInfo = () => {
  return (
    <div className='flex justify-between laptop:flex-col'>
      <div className='flex flex-col'>
        <Link aria-label='Go to the main page' href='/'>
          <LightMainLogo className='h-[54px] w-[auto] tablet:h-[80px] desktop:h-[92px]' />
        </Link>
        <Link
          href='mailto:access@thebrightbyte.com'
          className='mt-[24px] font-proxima text-[18px] font-bold text-white tablet:mt-[40px] laptop:mt-[60px] desktop:text-[26px]'
        >
          access@thebrightbyte.com
        </Link>
        <AddressInfo />
      </div>
      <div className='laptop:mt-[52px]'>
        <Link
          target='_blank'
          rel='noopener'
          href='https://www.linkedin.com/company/thebrightbyte/'
        >
          <LinkedInIcon className='h-[32px] w-[auto]' />
        </Link>
      </div>
    </div>
  );
};
