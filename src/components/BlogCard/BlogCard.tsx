import { BASE_URL } from '@/src/utils/alias';
import Image from 'next/image';
import Link from 'next/link';

interface Data {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface Props {
  post: Data;
}

export const BlogCard = ({ post }: Props) => {
  let url = '';
  if (process.env.NODE_ENV !== 'development') {
    url = BASE_URL;
  }

  return (
    <Link
      href={`/${post.slug}`}
      className='p-[10px] w-full flex rounded-lg ring-1 ring-inset ring-purple-light'
    >
      <div className='w-full'>
        <div className='overflow-hidden'>
          <Image
            src={`${url}${post.image}`}
            alt='image'
            width={300}
            height={180}
            className='w-full h-60 object-cover'
            unoptimized
          />
        </div>
        <div className='p-[24px] flex flex-col items-start'>
          <h3 className='mt-2 text-[20px]'>{post.title}</h3>
          <p className='mt-3 text-[16px]'>{post.description}</p>
        </div>
      </div>
    </Link>
  );
};
