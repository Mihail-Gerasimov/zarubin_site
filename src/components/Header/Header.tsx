import React from 'react';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='h-[44px] w-full tablet:h-[80px] desktop:h-[100px] flex items-center backdrop-blur-[12px] fixed top-0 z-20 bg-header-bg bg-opacity-5'>
      <nav className='mx-[auto] w-full px-[10px] tablet:px-[40px] desktop:px-[80px]'>
        {children}
      </nav>
    </header>
  );
};
