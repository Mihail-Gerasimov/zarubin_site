'use client';

import { menuListLayer } from '@/src/utils/menuListLayer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const FooterNavMenu = () => {
  const pathname = usePathname();

  return (
    <ul className='flex flex-col gap-[12px] tablet:flex-row laptop:w-[240px] laptop:flex-col'>
      {menuListLayer.map((item) => (
        <li
          key={item.id}
          className='flex h-[30px] w-fit flex-col items-center justify-center'
        >
          <Link
            href={item.link}
            className='group relative border-b-[2px] border-transparent font-proxima text-[16px] leading-[1.87] text-white tablet:text-[18px]'
          >
            {item.name}
            <div
              className={`absolute h-[2px] bg-main-blue transition-all duration-200 group-hover:w-full ${pathname.startsWith(item.link) ? 'w-full' : 'w-0'}`}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
