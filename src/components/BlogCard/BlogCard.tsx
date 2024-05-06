import { BASE_URL } from '@/src/utils/alias';
import { headers } from 'next/headers';
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
    const hederLIst = headers();
    const domain = hederLIst.get('x-forwarded-host');
    console.log(domain);
  }

  const description =
    post.description.length < 150
      ? post.description
      : post.description.slice(0, 150).trim() + '...';

  return (
    <Link
      href={`/${post.slug}`}
      className='w-full flex rounded-[20px] bg-main-gray'
    >
      <div className='w-full'>
        <div className='h-[128px] tablet:h-[196px] desktop:h-[241px] w-full relative overflow-hidden rounded-[20px]'>
          <Image
            src={`${url}${post.image}`}
            alt='image'
            width={300}
            height={128}
            className='top-0 left-0 w-full h-full object-cover absolute'
            unoptimized
          />
        </div>
        <div className='p-[14px_16px_16px] flex flex-col gap-[10px] items-start tablet:p-[40px_24px_24px] tablet:gap-[24px] desktop:p-[40px]'>
          <h3 className='text-[16px] tablet:text-[32px]'>{post.title}</h3>
          <p className='text-[14px] tablet:text-[21px]'>{description}</p>
        </div>
      </div>
    </Link>
  );
};
