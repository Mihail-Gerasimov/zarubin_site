import TriangeIcon from '@/public/assets/images/icons/triangle.svg';
import { IImage } from '@/src/utils/types';
import Image from 'next/image';

interface Props {
  title: string;
  image: IImage;
  isEven?: boolean;
  subData: SubData[];
}

interface SubData {
  id: number;
  title: string;
}

export const ExpertiseCard = ({
  title,
  subData,
  image,
  isEven = false,
}: Props) => {
  return (
    <div
      className={`flex overflow-hidden bg-dark-blue ${isEven && 'flex-row-reverse'}`}
    >
      <div className='flex w-full flex-col gap-[40px] px-[20px] py-[36px] tablet:w-[50%] desktop:px-[60px] desktop:py-[34px]'>
        <h3 className='font-unbound text-[24px] font-bold leading-[1.16] desktop:text-[38px]'>
          {title}
        </h3>
        <span className='block h-[1px] w-[98px] bg-white' />
        <ul className='flex flex-col gap-[19px]'>
          {subData.map((item) => (
            <li key={item.id} className='flex items-center gap-[19px]'>
              <TriangeIcon className='h-[18px] w-[18px]' />
              <p className=' font-proxima text-[20px] leading-[1.2] desktop:text-[24px] '>
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className='relative hidden w-[50%] overflow-hidden tablet:block'>
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt={`image ${title}`}
          className='absolute left-0 top-0'
        />
      </div>
    </div>
  );
};
