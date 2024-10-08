import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  list: List[];
  dark?: boolean;
  expertiseSubmenu?: Submenu[];
}

interface List {
  id: number;
  name: string;
  link: string;
}

interface Submenu {
  name: string;
  folderItems: { nameItem: string; link: string }[];
}

export const MainList = ({
  list,
  dark = true,
  // expertiseSubmenu = [],
}: Props) => {
  const pathname = usePathname();

  // const formatMenuItem = (menuItem: string) => {
  //   const newMenuItem = menuItem
  //     .split('_')
  //     .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
  //     .join(' ');
  //   return newMenuItem;
  // };

  // const finalLink = (str: string) => {
  //   const splitStr = str.split('.');
  //   return splitStr[0];
  // };

  return (
    <ul className='hidden justify-center gap-[44px] laptop-big:flex'>
      {list.map((item) => (
        <li key={item.id} className='group relative'>
          <Link
            href={item.link}
            className={classNames(
              `relative border-solid border-main-blue font-proxima leading-[1.87] hover:border-b-[2px]`,
              dark
                ? 'text-[22px] text-white desktop:text-[26px]'
                : 'text-[16px] text-[black]',
              {
                'border-b-[2px]': pathname.startsWith(item.link),
              },
            )}
          >
            {item.name}
          </Link>

          {/* {item.name.toLowerCase() === 'expertise' && (
            <div className='invisible absolute flex w-full gap-[20px] rounded-[4px] bg-black p-[5px] transition-all duration-200 ease-in-out group-hover:visible'>
              {expertiseSubmenu.map((item) => (
                <div key={item.name} className='p-[5px] text-white'>
                  <p className='flex whitespace-nowrap text-[24px]'>
                    {formatMenuItem(item.name)}
                  </p>
                  <ul>
                    {item.folderItems.map((el) => (
                      <li key={el.nameItem}>
                        <Link href={`/expertise/${finalLink(el.nameItem)}`}>
                          {formatMenuItem(finalLink(el.nameItem))}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )} */}
        </li>
      ))}
    </ul>
  );
};
