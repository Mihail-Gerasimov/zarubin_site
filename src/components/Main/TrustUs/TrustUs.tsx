import Image from 'next/image';
import { imageData } from './imageData';
import styles from './TrustUs.module.css';

export const TrustUs = () => {
  return (
    <div className='flex flex-col items-center gap-[30px] tablet:items-start laptop-big:flex-row laptop-big:items-center desktop:gap-[52px]'>
      <h2 className='whitespace-nowrap font-unbound text-[45px] font-bold uppercase leading-none desktop-hard:text-[70px] desktop-hard:leading-[1.1]'>
        Trust us
      </h2>
      <div className={styles.listWrapper}>
        <div className={styles.list}>
          <div className='flex h-[50px] w-full justify-around desktop:h-[92px] desktop-hard:text-[70px]'>
            {imageData.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                width={150}
                height={50}
                alt={item.alt}
                className='h-full w-auto'
              />
            ))}
          </div>
          <div className='flex h-[50px] w-full justify-around desktop:h-[92px] desktop-hard:text-[70px]'>
            {imageData.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                width={150}
                height={50}
                alt={item.alt}
                className='h-full w-auto'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
