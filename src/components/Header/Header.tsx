import React from 'react';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='py-[40px] backdrop-blur-md sticky top-0 z-10 bg-purple-main/30 bg-opacity-5'>
      <nav className='mx-[auto] w-full px-[24px] laptop:w-[1280px]'>
        {children}
      </nav>
    </header>
  );
};
