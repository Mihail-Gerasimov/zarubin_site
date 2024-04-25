import React from 'react';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='px-[24px] py-[40px] desktop:px-[55px] backdrop-blur-md sticky top-0 bg-purple-main/30 bg-opacity-5'>
      <nav className='w-full'>{children}</nav>
    </header>
  );
};
