import { formatMenuItem, formatMenuTitle } from '@/src/utils/formattedMenuItem';
import { Case } from '@/src/utils/getExpertiseMetadata';
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ExpertiseMenuCard } from '../ExpertiseMenuCard/ExpertiseMenuCard';
import Arrow from '@/public/assets/images/icons/arrow.svg';
import LinkArrow from '@/public/assets/images/icons/link_arrow.svg';
import { Container } from '../../shared/Container/Container';
import { postsSorting } from '@/src/utils/postsSorting';
import { DateTime } from 'luxon';

interface IExpertiseProps {
  expertiseSubMenu: Submenu[];
  toggleSubmenu: () => void;
  dark?: boolean;
  expertiseMetadata: Case[];
}

interface Submenu {
  name: string;
  folderItems: { nameItem: string; link: string }[];
}

export const ExpertiseSubMenu = ({
  dark = true,
  expertiseSubMenu,
  toggleSubmenu,
  expertiseMetadata,
}: IExpertiseProps) => {
  const [isItemActive, setIsItemActive] = useState(() => {
    const result = expertiseSubMenu.map((item, idx) => ({
      [item.name]: idx === 0,
    }));
    return Object.assign({}, ...result);
  });

  // const sortedExpertiseData = expertiseMetadata.sort((a,b)=>{
  //   if(!a&&!b)return 0
  //   const dateA = DateTime.fromFormat(a.date, 'dd-MM-yyyy');
  //   const dateB = DateTime.fromFormat(b.date, 'dd-MM-yyyy');
  //   if (dateA > dateB) return -1;
  //   if (dateA < dateB) return 1;
  //   return 0;
  // })

  // const sortedExpertiseData=postsSorting(expertiseMetadata)

  const handleSetActiveItem = (itemName: string) => {
    setIsItemActive((prevItems) =>
      Object.keys(prevItems).reduce(
        (acc, key) => {
          acc[key] = key === itemName;
          return acc;
        },
        {} as Record<string, boolean>,
      ),
    );
  };

  const finalLink = (str: string) => {
    const splitStr = str.split('.');
    return splitStr[0];
  };

  return (
    <div className='mx-auto my-0 flex w-full items-stretch gap-[40px] p-[40px]'>
      <div className='w-[464px]'>
        {expertiseSubMenu.map((item) => (
          <div
            key={item.name}
            className={`flex flex-col p-[5px] ${dark ? 'text-white' : 'text-main-bg'}`}
          >
            <button
              type='button'
              onClick={() => handleSetActiveItem(item.name)}
              className='flex w-full flex-1 items-center justify-between text-left font-proxima text-[20px] font-bold'
            >
              {formatMenuTitle(item.name)}
              <Arrow
                className={`h-[auto] w-[25px] transform fill-white transition-all duration-300 ease-in-out ${isItemActive[item.name] ? '-rotate-[-90deg]' : '-rotate-30'}`}
              />
            </button>
            <div
              className={`relative flex w-[464px] transform gap-x-[20px] gap-y-[20px] overflow-hidden bg-dark-blue px-[20px] transition-all ${isItemActive[item.name] ? 'max-h-[240px] py-[20px] duration-500' : 'h-0 p-0 duration-0'}`}
            >
              <ul
                className={`grid grid-cols-2 gap-[12px] transition-all ease-in-out ${isItemActive[item.name] ? 'h-full duration-500' : 'h-0 duration-0'}`}
              >
                {item.folderItems.slice(0, 6).map((el) => (
                  <li
                    key={el.nameItem}
                    className='w-full font-proxima leading-[1.87]'
                  >
                    <Link
                      onClick={toggleSubmenu}
                      className='relative border-b-[2px] border-solid border-transparent py-[5px] font-proxima text-[16px] leading-[1.1] hover:border-main-blue'
                      href={`/expertise/${finalLink(el.nameItem)}`}
                    >
                      {formatMenuItem(finalLink(el.nameItem))}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <ul>
                {item.folderItems.slice(7).map((el) => (
                  <li
                    key={el.nameItem}
                    className={`w-full font-proxima leading-[1.87]`}
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
              </ul> */}
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-[630px] flex-col gap-[20px]'>
        <div className='flex items-center justify-between'>
          <p className='font-unbound text-[20px] font-bold uppercase leading-[1.4]'>
            The latest expertise
          </p>
          <Link
            href='/expertise'
            className='flex items-center gap-[10px] font-proxima text-[20px] font-bold leading-[1] text-main-blue'
          >
            All articles
            <LinkArrow className='h-[auto] w-[24px] fill-main-blue' />
          </Link>
        </div>
        <div className='mx-0 flex w-full px-0'>
          <Swiper spaceBetween={40} slidesPerView={2}>
            {expertiseMetadata.slice(0, 2).map((post, idx) => (
              <SwiperSlide key={idx}>
                <ExpertiseMenuCard
                  title={post.title}
                  description={post.description}
                  tag={post.tag}
                  slug={post.slug}
                  subCategory={post.subCategory}
                  image={post.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
