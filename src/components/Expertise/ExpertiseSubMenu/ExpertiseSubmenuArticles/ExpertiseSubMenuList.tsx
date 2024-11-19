import {
    formatLink,
    formatMenuItem,
    formatMenuTitle
} from '@/src/utils/formattedMenuItem';
import Link from 'next/link';

interface IProps {
  data: Submenu[];
  onClick: () => void;
}

interface Submenu {
  name: string;
  folderItems: { nameItem: string; link: string }[];
}

export const ExpertiseSubMenuList = ({ data, onClick }: IProps) => {
  return (
    <div>
      <div className='flex w-full flex-col gap-[20px] laptop-big:w-[464px]'>
        {data.map((item) => (
          <div key={item.name} className={`flex flex-col p-[5px] text-white`}>
            <h3 className='flex w-full flex-1 items-center justify-between text-left font-proxima text-[20px] font-bold'>
              {formatMenuTitle(item.name)}
            </h3>
            <div
              className={`relative mt-[10px] flex w-full transform gap-x-[20px] gap-y-[20px] overflow-hidden bg-dark-blue p-[20px] px-[20px]`}
            >
              <ul className={`grid w-full grid-cols-2 gap-[12px] `}>
                {item.folderItems.slice(0, 6).map((el) => (
                  <li
                    key={el.nameItem}
                    className='w-full font-proxima leading-[1.87]'
                    onClick={onClick}
                  >
                    <Link
                      className='relative border-b-[2px] border-solid border-transparent py-[5px] font-proxima text-[16px] leading-[1.1] hover:border-main-blue'
                      href={`/expertise/${formatLink(el.link)}`}
                    >
                      {formatMenuItem(formatLink(el.nameItem))}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
