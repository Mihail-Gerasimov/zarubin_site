import Image from 'next/image';
import defaultImg from '@/public/assets/images/banner/default_logo.png';

export const DefaultImage = () => {
  return (
    <Image
      src={defaultImg}
      alt=''
      width={300}
      height={150}
      className='w-[auto] h-[102px] absolute right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%] tablet:h-[173px]'
    />
  );
};
