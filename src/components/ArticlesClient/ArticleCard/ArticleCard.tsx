import defaultImg from '@/public/assets/images/banner/default_insights.webp';
import { formattedDate } from '@/src/utils/formattedDate';
import { Post } from '@/src/utils/types';
import Image from 'next/image';
import Link from 'next/link';

interface IArticleProps {
  data: Post;
}

export const ArticleCard = ({ data }: IArticleProps) => {
  const formatedDate = formattedDate(data.date);
  const tags = data.tag
    ? data.tag.split(',').filter((tag) => tag.trim() !== '')
    : [];

  return (
    <div className='flex flex-col gap-[40px] laptop:flex-row'>
      <Link
        href={`/expertise/${data.slug}`}
        className='relative max-h-[210px] min-w-[360px] flex-1 overflow-hidden laptop-big:aspect-[16/9]'
      >
        <Image
          src={data.image || defaultImg}
          width={360}
          height={240}
          alt={data.title}
          className='h-full w-full object-cover object-center'
          quality={80}
        />
      </Link>
      <div className='flex w-full flex-col gap-[20px] laptop-big:w-[70%]'>
        <h2 className='w-full font-unbound text-[18px] font-bold leading-[1.2] text-text-dark hover:underline laptop-big:text-[24px]'>
          <Link href={`/expertise/${data.slug}`}>{data.title}</Link>
        </h2>
        <p className='w-full font-proxima text-[16px] leading-[1.2] text-text-dark'>
          {data.description}
        </p>
        <div className='flex w-full flex-col-reverse items-start gap-[20px] '>
          <span className='whitespace-nowrap font-proxima text-[14px] text-text-dark/60'>
            {formatedDate.toUpperCase()}
          </span>
          {tags && tags.length !== 0 && (
            <ul className='flex flex-wrap gap-[10px]'>
              {tags.map((item) => (
                <li key={item} className='h-fit w-fit'>
                  <span className='border-text-text-dark/60 block rounded-[4px] border-[1px] bg-gray-200 p-[5px_10px] font-proxima font-bold'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

{
  /* <div className='relative aspect-[16/9] w-full overflow-hidden rounded-tl-[5px] rounded-tr-[5px]'>
        <Image
          src={image || defaultImg}
          alt={title || 'post image'}
          width={450}
          height={250}
          className='h-full w-full object-cover object-center'
          quality={80}
        />
      </div> */
}
