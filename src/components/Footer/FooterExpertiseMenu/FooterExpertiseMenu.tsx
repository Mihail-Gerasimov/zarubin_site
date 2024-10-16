import { finalLink, formatMenuItem } from '@/src/utils/expertiseMenu';
import Link from 'next/link';

interface IProps {
  expertiseMenu: Submenu[];
}

interface Submenu {
  name: string;
  folderItems: { nameItem: string; link: string }[];
}

export const FooterExpertiseMenu = ({ expertiseMenu }: IProps) => {
  return (
    <div className='pb-[20px] tablet:pb-0'>
      {expertiseMenu.map((item) => (
        <div key={item.name}>
          <p className='font-unbound text-[16px] font-bold uppercase leading-[1.2] text-white tablet:h-[30px] tablet:text-[18px] desktop:text-[24px]'>
            {formatMenuItem(item.name)}
          </p>
          <ul className='mt-[20px] flex flex-col gap-[24px] tablet:mt-[10px] tablet:gap-[20px] desktop:mt-[40px]'>
            {item.folderItems.map((el) => (
              <li key={el.nameItem} className='w-fit'>
                <Link
                  href={`/expertise/${finalLink(el.nameItem)}`}
                  className='group relative w-fit font-proxima text-[16px] leading-[1.2] text-white'
                >
                  {formatMenuItem(finalLink(el.nameItem))}
                  <div className='absolute h-[2px] w-0 bg-main-blue transition-all duration-200 group-hover:w-full' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
