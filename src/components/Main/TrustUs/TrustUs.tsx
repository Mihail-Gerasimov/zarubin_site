import Image from 'next/image';
import { imageData } from './imageData';

export const TrustUs = () => {
  return (
    <div className='flex flex-col items-center gap-[30px] tablet:items-start laptop-big:flex-row laptop-big:items-center desktop:gap-[52px]'>
      <h2 className='whitespace-nowrap font-unbound text-[45px] font-bold uppercase leading-none desktop-hard:text-[70px] desktop-hard:leading-[1.1]'>
        Trust us
      </h2>
      <div className='relative w-full overflow-hidden'>
        <div className='absolute left-0 top-0 z-[2] h-full w-full bg-radial-primary' />
        <div className='flex w-[200%] animate-scroll items-center pl-[30px]'>
          <div className='flex h-[50px] w-full justify-around desktop:h-[92px] desktop-hard:text-[70px]'>
            {imageData.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                height={70}
                alt={item.alt}
                className='w-auto'
              />
            ))}
          </div>
          <div className='flex h-[50px] w-full justify-around desktop:h-[92px] desktop-hard:text-[70px]'>
            {imageData.map((item) => (
              <Image
                key={item.id}
                height={70}
                src={item.image}
                alt={item.alt}
                className='w-auto'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
