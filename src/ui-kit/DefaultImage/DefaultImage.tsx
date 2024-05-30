import defaultImg from '@/public/assets/images/banner/default_logo.png';
import Image from 'next/image';

export const DefaultImage = () => {
  return (
    <Image
      src={defaultImg}
      alt=''
      width={300}
      height={150}
      className='absolute right-[50%] top-[50%] h-[102px] w-[auto] translate-x-[50%] translate-y-[-50%] tablet:h-[173px]'
      unoptimized
    />
  );
};
