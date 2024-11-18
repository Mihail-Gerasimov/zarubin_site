import defaultImg from '@/public/assets/images/banner/default_insights.webp';
import { NextLinePreposition } from '@/src/components/NextLinePreposition/NextLinePreposition';
// import { DownloadLink } from '@/src/ui-kit/DownloadLink/DownloadLink';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  tag: string | undefined;
  description: string;
  slug: string;
  subCategory: string | undefined | null;
  image: string | undefined | null;
}

export const ExpertiseMenuCard = ({
  title,
  description,
  slug,
  image,
}: Props) => {
  return (
    <Link href={`/expertise/${slug}`} className='flex w-[309px] flex-col'>
      <div className='overflow-hiddenn relative aspect-[16/9] w-fit'>
        {/* <div className='overflow-hiddenn relative w-full'> */}
        {image ? (
          <Image
            src={image}
            alt={title}
            width={450}
            height={250}
            className='h-full w-full object-cover object-center'
            quality={80}
          />
        ) : (
          <Image
            src={defaultImg}
            alt={title}
            width={450}
            height={250}
            className='h-full w-full object-cover object-center'
            quality={80}
          />
        )}
      </div>
      <div className='flex h-full w-full flex-col items-stretch rounded-b-[5px] bg-white p-[25px]'>
        <NextLinePreposition
          tag='h3'
          text={title}
          className='line-clamp-3 overflow-hidden font-unbound text-[12px] font-bold uppercase leading-[1.4] text-text-dark'
        />
        <NextLinePreposition
          tag='p'
          text={description}
          className='mt-[12px] line-clamp-3 overflow-hidden font-proxima text-[16px] leading-[1.25] text-text-dark/70'
        />
      </div>
    </Link>
  );
};
