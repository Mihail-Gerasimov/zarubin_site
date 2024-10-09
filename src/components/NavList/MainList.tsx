import Arrow from '@/public/assets/images/icons/arrow.svg';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  list: List[];
  dark?: boolean;
  activeSubmenu: boolean;
  toggleSubmenu: () => void;
}

interface List {
  id: number;
  name: string;
  link: string;
}

export const MainList = ({
  list,
  dark = true,
  toggleSubmenu,
  activeSubmenu,
}: Props) => {
  const pathname = usePathname();

  return (
    <ul className='hidden justify-center gap-[44px] laptop-big:flex'>
      {list.map((item) => (
        <li
          key={item.id}
          className='flex items-center justify-center gap-[10px]'
        >
          <Link
            href={item.link}
            className={classNames(
              `relative border-solid border-main-blue font-proxima leading-[1.87] hover:border-b-[2px]`,
              dark
                ? 'text-[16px] text-white desktop:text-[16px]'
                : 'text-[16px] text-[black]',
              {
                'border-b-[2px]': pathname.startsWith(item.link),
              },
            )}
          >
            {item.name}
          </Link>

          {item.name.toLowerCase() === 'expertise' && (
            <button
              type='button'
              onClick={toggleSubmenu}
              className='h-fit w-fit'
            >
              <Arrow
                className={`h-[auto] w-[25px]  transition-transform duration-300 ease-in-out hover:fill-main-blue ${dark ? 'fill-white' : 'fill-main-bg'} ${activeSubmenu ? '-rotate-90' : 'rotate-90'}`}
              />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
