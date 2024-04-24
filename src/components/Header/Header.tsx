import React from 'react';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='px-[24px] py-[40px] desktop:px-[144px] backdrop-blur-md sticky top-0 bg-purple-main bg-opacity-5'>
      <nav>
        {children}
        {/* <ul className='grid grid-cols-2 desktop:grid-cols-3'>
          <li className='flex'>
            <a
              href={'https://stocks.soccer/'}
              className='flex items-center gap-[10px]'
            >
              <Arrow className='w-[16px] h-[16px] fill-white' />
              Leagues
            </a>
          </li>
          <li className='flex items-center justify-center'>
            <Link href={'/'} className=' '>
              Blog home
            </Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};
