import { getArticlesList } from '@/src/utils/articlesMenu';
import Link from 'next/link';
import { Container } from '../shared/Container/Container';
import { FooterExpertiseMenu } from './FooterExpertiseMenu/FooterExpertiseMenu';
import { FooterLinksInfo } from './FooterLinksInfo/FooterLinksInfo';
import { FooterNavMenu } from './FooterNavMenu/FooterNavMenu';

export const Footer = () => {
  const expertiseMenu = getArticlesList('expertise');

  return (
    <footer className='w-full bg-main-bg py-[40px] text-[14px] leading-[1.2] tablet:py-[60px] desktop:text-[18px] desktop:leading-[1.1]'>
      <Container className='flex flex-col gap-[40px]'>
        <div className='flex w-full flex-col gap-[40px] tablet:gap-[60px] laptop:flex-row laptop:justify-between desktop:justify-between'>
          <FooterLinksInfo />
          <div className='flex gap-[24px] tablet:gap-[44px] laptop:flex-row laptop:gap-[40px]'>
            <FooterNavMenu />
            <FooterExpertiseMenu expertiseMenu={expertiseMenu} />
          </div>
        </div>
        <div className='w-full border-t-[2px] border-dark'>
          <span className='mb-[40px] block h-[2px] w-full bg-dark' />
          <ul className='flex flex-col gap-[20px] tablet:flex-row tablet:justify-between'>
            <li>
              <Link
                href='/policy'
                className='font-proxima text-[16px] leading-[1.1] text-white opacity-50 desktop:text-[18px]'
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <span className='font-proxima text-[16px] leading-[1.1] text-white opacity-50 desktop:text-[18px]'>
                &copy; Bright Byte
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
