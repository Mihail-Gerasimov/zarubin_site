import { DefaultImage } from '@/src/ui-kit/DefaultImage/DefaultImage';
import { BASE_URL } from '@/src/utils/alias';
import { DateTime } from 'luxon';
import Image from 'next/image';
import Link from 'next/link';
import { DateTime } from 'luxon';

interface Data {
  title: string;
  description: string;
  image: string;
  date: string;
  tag: string;
  slug: string;
}

interface Props {
  post: Data;
}

export const BlogCard = ({ post }: Props) => {
  const description =
    post.description.length < 150
      ? post.description
      : post.description.slice(0, 150).trim() + '...';

  const url = process.env.NODE_ENV === 'development' ? '' : BASE_URL;

  const date = DateTime.fromFormat(post.date, 'dd-MM-yyyy');
  const formattedDate = date
    .setLocale('en-GB')
    .toLocaleString({
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .toLocaleLowerCase();

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
            <span className='p-[10px] text-[20px] rounded-[2px] bg-white'>
              {post.tag}
            </span>
          )}
          <h3 className='text-[28px] tablet:text-[36px] desktop:text-[40px]'>
            {post.title}
          </h3>
          <p className='text-[20px]'>{description}</p>
          <span className='text-[16px] text-[#010C2C]'>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
};
