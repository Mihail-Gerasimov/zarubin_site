import LightMainLogo from '@/public/assets/images/icons/footer_logo_dark.svg';
import { getExpertiseList } from '@/src/utils/expertiseMenu';
import Link from 'next/link';
import { Container } from '../shared/Container/Container';
import { FooterExpertiseMenu } from './FooterExpertiseMenu/FooterExpertiseMenu';
import { FooterNavMenu } from './FooterNavMenu/FooterNavMenu';

export const Footer = () => {
  const expertiseMenu = getExpertiseList();

  return (
    <footer className='w-full bg-main-bg py-[40px] text-[14px] leading-[1.2] tablet:py-[60px] desktop:text-[18px] desktop:leading-[1.1]'>
      <Container className='flex flex-col gap-[40px] tablet:gap-[40px] desktop:gap-[88px]'>
        <div className='flex w-full flex-col gap-[24px] tablet:gap-[60px] laptop:flex-row-reverse laptop:justify-between desktop:justify-between'>
          <div className='flex flex-col laptop:mt-[49px] laptop:items-end laptop:gap-[51px]'>
            <Link aria-label='Go to the main page' href='/'>
              <LightMainLogo className='h-[31px] w-[auto] tablet:h-[53px] desktop:h-[70px]' />
            </Link>
            <Link
              href='mailto:access@thebrightbyte.com'
              className='hidden font-proxima text-[18px] font-bold text-white laptop:block desktop:text-[26px]'
            >
              access@thebrightbyte.com
            </Link>
          </div>
          <div className='flex flex-col gap-[24px] tablet:gap-[44px] laptop:flex-row laptop:gap-[40px]'>
            <FooterNavMenu />
            <FooterExpertiseMenu expertiseMenu={expertiseMenu} />
          </div>
          <div className='flex flex-col gap-[12px] laptop:hidden'>
            <Link
              href='mailto:access@thebrightbyte.com'
              className='font-proxima text-[18px] font-bold text-white'
            >
              access@thebrightbyte.com
            </Link>
          </div>
        </div>
        <div className='w-full border-t-[2px] border-dark'>
          <span className='mb-[40px] block h-[2px] w-full bg-dark' />
          <ul className='flex flex-col gap-[20px] tablet:flex-row tablet:justify-between'>
            <li>
              <Link
                href='/policy'
                className='font-proxima text-[16px] leading-[1.1] text-white opacity-50 desktop:text-[26px]'
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <span className='font-proxima text-[16px] leading-[1.1] text-white opacity-50 desktop:text-[26px]'>
                &copy; Bright Byte
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
