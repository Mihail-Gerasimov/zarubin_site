'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ContactUsBtn = () => {
  const pathName = usePathname();
  const pathArray = pathName.split('/').filter((item) => item !== '');
  const isMainPage = pathArray.includes('main');

  return (
    <Link
      href='/brief'
      className={`hidden w-fit items-center justify-center rounded-[6px] border-[1px] ${isMainPage ? 'border-main-orange text-white hover:bg-main-orange' : 'border-[#7cffcd] text-white hover:bg-[#7CFFCD]'} p-[14px_32px] font-proxima text-[18px] font-bold leading-[1] duration-300  hover:text-text-dark  laptop-big:flex desktop:text-[20px]`}
    >
      Free strategy session
    </Link>
  );
};
