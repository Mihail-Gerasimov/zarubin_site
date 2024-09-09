import { DefaultImage } from '@/src/ui-kit/DefaultImage/DefaultImage';
import { formattedDate } from '@/src/utils/formattedDate';
import Image from 'next/image';
import Link from 'next/link';

interface Data {
  title: string;
  description: string;
  image: string | undefined;
  type: string | null | undefined;
  date: string;
  tag: string | undefined;
  slug: string;
}

interface Props {
  post: Data;
}

export const BlogCard = ({ post }: Props) => {
  const date = formattedDate(post.date);

  return (
    <Link href={`/blog/${post.slug}`} className='w-full'>
      <div className='flex w-full flex-col gap-[8px]'>
        <div className='relative h-[150px] w-full overflow-hidden rounded-[12px] bg-main-blue/20 tablet:h-[300px] desktop:h-[378px]'>
          {post.image ? (
            <Image
              src={post.image}
              alt={`Image ${post.slug}`}
              width={876}
              height={378}
              className='left-0 top-0 h-full w-full object-cover'
              quality={80}
            />
          ) : (
            <DefaultImage type={post.type} />
          )}
        </div>
        <div className='flex flex-col items-start gap-[24px] rounded-[12px] bg-main-beige p-[14px_16px_16px] tablet:gap-[24px] tablet:p-[40px_24px_24px] desktop:p-[40px]'>
          {post.tag && (
            <span className='rounded-[2px] bg-white p-[10px] font-proxima text-[20px]'>
              {post.tag}
            </span>
          )}
          <h3 className='font-proxima text-[28px] font-bold leading-[1.14] tablet:text-[36px] tablet:leading-[1.1] desktop:text-[40px]'>
            {post.title}
          </h3>
          <p className='line-clamp-2 overflow-hidden font-proxima text-[20px] opacity-[70%]'>
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
