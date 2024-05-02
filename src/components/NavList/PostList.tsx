import Arrow from '@/src/assets/svg/arrow.svg';
import { LeagueLink } from '@/src/ui-kit/LeagueLink/LeagueLink';
import { Logo } from '@/src/ui-kit/LogoIcon/Logo';
import Link from 'next/link';

export const PostList = () => {
  return (
    <ul className='mx-[auto] flex items-center justify-between'>
      <li className='flex'>
        <Link
          href='/'
          className='flex items-center justify-center gap-[6px] font-bebas text-[12px] uppercase mobile-big:text-[16px] tablet:gap-[12px] tablet:text-[24px] desktop:text-[32px]'
        >
          <Arrow className='w-[auto] h-[8px]  tablet:w-[16px]' />
          Back
        </Link>
      </li>
      <li className='flex items-center'>
        <Logo />
      </li>
      <li className='flex items-center justify-end'>
        <LeagueLink />
      </li>
    </ul>
  );
};
