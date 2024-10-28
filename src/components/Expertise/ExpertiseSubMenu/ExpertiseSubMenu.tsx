import { formatMenuItem, formatMenuTitle } from '@/src/utils/formattedMenuItem';
import Link from 'next/link';

interface IExpertiseProps {
  expertiseSubMenu: Submenu[];
  toggleSubmenu: () => void;
  dark?: boolean;
}

interface Submenu {
  name: string;
  folderItems: { nameItem: string; link: string }[];
}

export const ExpertiseSubMenu = ({
  dark = true,
  expertiseSubMenu,
  toggleSubmenu,
}: IExpertiseProps) => {
  const finalLink = (str: string) => {
    const splitStr = str.split('.');
    return splitStr[0];
  };

  return (
    <div className='mx-auto my-0 flex w-full max-w-[900px] items-stretch gap-[40px] px-[60px] py-[10px]'>
      {expertiseSubMenu.map((item) => (
        <div
          key={item.name}
          className={`flex flex-col p-[5px] ${dark ? 'text-white' : 'text-main-bg'}`}
        >
          <p className='flex-1 font-unbound text-[22px] font-bold uppercase'>
            {formatMenuTitle(item.name)}
          </p>
          <div className='mt-[40px] flex-1'>
            <ul className='grid grid-flow-col grid-rows-4 gap-x-[40px] gap-y-[20px]'>
              {item.folderItems.map((el) => (
                <li
                  key={el.nameItem}
                  className={`w-fit font-proxima leading-[1.87]`}
                >
                  <Link
                    onClick={toggleSubmenu}
                    className='relative border-b-[2px] border-solid border-transparent py-[5px] font-proxima text-[16px] hover:border-main-blue'
                    href={`/expertise/${finalLink(el.nameItem)}`}
                  >
                    {formatMenuItem(finalLink(el.nameItem))}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
