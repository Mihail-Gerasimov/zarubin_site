import Image from 'next/image';
import styles from './Unlock.module.css';

export const Unlock = () => {
  return (
    <div
      className={`${styles.unlockContainer} overflow-hidden p-[100px_10px] tablet:p-[100px_40px] desktop:p-[100px_80px]`}
    >
      <Image
        src='/assets/images/main/group.png'
        layout='fill'
        objectFit='cover'
        objectPosition='bottom'
        alt=''
        className='absolute bottom-0 right-0 opacity-[3%]'
      />
      <h2 className='relative z-[5] py-[170px] font-unbound text-[40px] font-bold uppercase tablet:text-[60px] desktop:text-[80px] desktop:leading-[1.22] desktop-hard:text-[90px]'>
        Unlock Your Business Potential with Our Expertise and
        <span className='text-stroke text-[40px] tablet:text-[60px] desktop:text-[80px] desktop:leading-[1.22] desktop-hard:text-[90px]'>
          {' '}
          Strategic Insights
        </span>
      </h2>
    </div>
  );
};
