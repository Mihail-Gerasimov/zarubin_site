import Image from 'next/image';

export const Unlock = () => {
  return (
    <div className='relative overflow-hidden p-[100px_10px] tablet:p-[100px_40px] desktop:p-[100px_80px]'>
      <Image
        src='/assets/images/main/group.png'
        layout='fill'
        objectFit='cover'
        objectPosition='bottom'
        alt=''
        className='absolute bottom-0 right-0 opacity-[3%]'
      />
      <h2 className='z-[5] font-unbound text-[40px] font-bold uppercase tablet:text-[60px] desktop:text-[90px]'>
        Unlock Your Business Potential with Our Expertise and
        <span className='text-stroke text-[40px] tablet:text-[60px] desktop:text-[90px]'>
          {' '}
          Strategic Insights
        </span>
      </h2>
    </div>
  );
};
