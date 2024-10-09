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

const formatMenuItem = (menuItem: string) => {
  const newMenuItem = menuItem
    .split('_')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');
  return newMenuItem;
};

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
    <div className='mx-[auto] flex w-full max-w-[1160px] justify-around py-[10px]'>
      {expertiseSubMenu.map((item) => (
        <div
          key={item.name}
          className={`p-[5px] ${dark ? 'text-white' : 'text-main-bg'}`}
        >
          <p className='flex whitespace-nowrap font-unbound text-[22px] font-bold uppercase'>
            {formatMenuItem(item.name)}
          </p>
          <ul className='mt-[40px] grid w-fit grid-flow-col grid-rows-4 gap-x-[40px] gap-y-[20px]'>
            {item.folderItems.map((el) => (
              <li
                key={el.nameItem}
                className={`inline-block w-[200px] font-proxima leading-[1.87]`}
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
      ))}
    </div>
  );
};
