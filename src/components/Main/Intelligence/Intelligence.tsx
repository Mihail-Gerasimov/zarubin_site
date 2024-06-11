import Image from 'next/image';

export const Intelligence = () => {
  return (
    <div className='bussinesBg overflow-hidden px-[10px] py-[60px] text-right tablet:px-[40px] tablet:pb-[170px] tablet:pt-0 desktop:px-[80px] desktop:py-[100px]'>
      <div className='relative z-30'>
        <h2 className='font-unbound text-[32px] font-bold uppercase leading-[1.1] tablet:text-[60px] tablet:leading-[1] desktop:text-[80px] desktop:leading-[1.22] desktop-hard:text-[90px]'>
          Where Leadership Meets{' '}
        </h2>
        <h2 className='text-stroke font-unbound text-[32px] font-bold uppercase leading-[1.1] tablet:text-[60px] tablet:leading-[1] desktop:mb-[230px] desktop:text-[80px] desktop:leading-[1.22] desktop-hard:text-[90px]'>
          Business Intelligence
        </h2>
      </div>
      <Image
        width={400}
        height={300}
        src='/assets/images/main/bussines_bg.png'
        alt=''
        className='absolute right-[64px] top-[18px] h-[auto] w-[436px] tablet:right-0 tablet:top-[23px] tablet:w-full desktop:left-[-100px] desktop:h-[728px] desktop:w-[auto]'
      />
    </div>
  );
};
