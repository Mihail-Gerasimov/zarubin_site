import Arrow from '@/src/assets/svg/arrow-left.svg';
import Logo from '@/src/assets/svg/logo.svg';
import Link from 'next/link';

export const PostList = () => {
  return (
    <ul className='mx-[auto] max-w-[896px] grid grid-cols-3 grid-rows-2 desktop:grid-cols-3'>
      <li className='flex'>
        <Link
          href='/'
          className='flex items-center gap-[6px] text-[12px] tablet:text-[16px] tablet:gap-[12px]'
        >
          <Arrow className='w-[8px] h-[16px] fill-white tablet:w-[16px]' />
          Back
        </Link>
      </li>
      <li className='flex items-center justify-center'>
        <Link href={'/'} className='flex items-center justify-center'>
          <Logo className='h-[16px] w-[auto] tablet:h-[20px]' />
        </Link>
      </li>
      <li className='flex items-center justify-end'>
        <a
          href={'https://stocks.soccer/'}
          className='text-[12px] tablet:text-[16px]'
        >
          Leagues
        </a>
      </li>
    </ul>
  );
};
