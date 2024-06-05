import TriangeIcon from '@/public/assets/images/icons/triangle.svg';
import { LinkArrow } from '@/src/ui-kit/LinkArrow/LinkArrow';
import { IImage } from '@/src/utils/types';
import Image from 'next/image';

interface Props {
  title: string;
  link: string;
  image: IImage;
  data: Data[];
}

interface Data {
  id: number;
  title: string;
}

export const IndustriesCard = ({ title, data, link, image }: Props) => {
  const btnTitle = title.split(' ')[0];

  return (
    <div className='relative flex flex-col gap-[40px]'>
      <h2 className='break-words font-unbound text-[70px] font-bold leading-[1] text-text-dark tablet:text-[90px] desktop:text-[100px]'>
        {title}
      </h2>
      <ul className='flex flex-col gap-[20px]'>
        {data.map((item) => (
          <li key={item.id} className='flex items-center gap-[20px]'>
            <TriangeIcon className='h-[18px] w-[18px]' />
            <p className='relative font-proxima text-[20px] leading-[1.2] text-text-dark'>
              {item.title}
            </p>
          </li>
        ))}
      </ul>
      <div className='w-fit tablet:mt-[92px] desktop:mt-[20px]'>
        <LinkArrow title={`${btnTitle} solutions`} link={link} />
      </div>
      <Image
        src={image}
        width={300}
        height={300}
        alt={title}
        className='absolute bottom-0 right-0 hidden tablet:block'
      />
    </div>
  );
};
