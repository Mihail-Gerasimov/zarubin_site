'use client';

// import { ContactUsLink } from '@/src/ui-kit/LeagueLink/ContactUsBtn';
import { Logo } from '@/src/ui-kit/LogoIcon/Logo';
import { usePathname } from 'next/navigation';

export const PostList = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <ul className='mx-[auto] flex items-center justify-between'>
      {/* <li className='flex'>
        <Link
          href='/'
          className='flex items-center justify-center gap-[6px] font-bebas text-[12px] uppercase mobile-big:text-[16px] tablet:gap-[12px] tablet:text-[24px] desktop:text-[32px]'
        >
          <Arrow className='w-[auto] h-[8px]  tablet:w-[16px]' />
          Back
        </Link>
      </li> */}
      <li className='flex items-center'>
        <Logo />
      </li>
      <li className='flex items-center justify-end'>
        {/* <ContactUsLink /> */}
      </li>
    </ul>
  );
};
