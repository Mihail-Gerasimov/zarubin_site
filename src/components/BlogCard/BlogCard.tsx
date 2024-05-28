import { DefaultImage } from '@/src/ui-kit/DefaultImage/DefaultImage';
import { BASE_URL } from '@/src/utils/alias';
import { formattedDate } from '@/src/utils/formattedDate';
import Image from 'next/image';
import Link from 'next/link';

interface Data {
  title: string;
  description: string;
  image: string;
  date: string;
  tag: string | undefined;
  slug: string;
}

interface Props {
  post: Data;
}

export const BlogCard = ({ post }: Props) => {
  const url = process.env.NODE_ENV === 'development' ? '' : BASE_URL;

  const date = formattedDate(post.date);

  return (
    <Link href={`/${post.slug}`} className='w-full'>
      <div className='w-full flex flex-col gap-[8px]'>
        <div className='h-[150px] tablet:h-[300px] desktop:h-[378px] w-full relative overflow-hidden rounded-[12px]'>
          {post.image ? (
            <Image
              src={`${url}${post.image}`}
              alt={`Image ${post.slug}`}
              width={300}
              height={128}
              className='top-0 left-0 w-full h-full object-cover'
              unoptimized
            />
          ) : (
            <DefaultImage />
          )}
        </div>
        <div className='p-[14px_16px_16px] flex flex-col gap-[24px] items-start bg-main-beige rounded-[12px] tablet:p-[40px_24px_24px] tablet:gap-[24px] desktop:p-[40px]'>
          {post.tag && (
            <span className='font-proxima p-[10px] text-[20px] rounded-[2px] bg-white'>
              {post.tag}
            </span>
          )}
          <h3 className='font-proxima font-bold text-[28px] tablet:text-[36px] desktop:text-[40px]'>
            {post.title}
          </h3>
          <p className='font-proxima text-[20px] overflow-hidden line-clamp-2 opacity-[70%]'>
            {post.description}
          </p>
          <span className='font-proxima text-[16px] text-[#010C2C] opacity-[50%]'>
            {date}
          </span>
        </div>
      </div>
    </Link>
  );
};
