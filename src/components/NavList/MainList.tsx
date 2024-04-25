import Logo from '@/src/assets/svg/logo.svg';
import Link from 'next/link';

export const MainList = () => {
  return (
    <ul className='mx-[auto] grid grid-cols-3 desktop:grid-cols-3'>
      <li className='desktop:block' />
      <li className='flex items-center justify-center'>
        <Link href={'/'} className=' '>
          <Logo className='h-[16px] w-[auto] tablet:h-[20px]' />
        </Link>
      </li>
      <li className='flex items-end justify-end'>
        <a
          href={'https://stocks.soccer/'}
          className='flex text-[12px] tablet:text-[16px]'
        >
          to League
        </a>
      </li>
    </ul>
  );
};
