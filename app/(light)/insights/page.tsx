import { NextLinePreposition } from '@/src/components/NextLinePreposition/NextLinePreposition';
import { PostsComponent } from '@/src/components/PostsComponent/PostsComponent';
import { contentTrimming } from '@/src/utils/contentTrimming';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { pageMetadata } from '@/src/utils/pageMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import { Metadata } from 'next';

const title = pageMetadata.insights.title;
const description = contentTrimming(pageMetadata.insights.description, 155);
const keywords = pageMetadata.insights.keywords;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://thebrightbyte.com'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  alternates: {
    canonical: new URL('https://thebrightbyte.com/insights'),
    types: {
      'application/rss+xml': [
        {
          title: 'Bright Byte Insights',
          url: 'https://thebrightbyte.com/insights/rss',
        },
      ],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BrightByte.com',
    ...openGraphImage,
    title,
    description,
    url: 'https://thebrightbyte.com/insights',
  },
  keywords,
};

export default function Blog() {
  const postMetadata = getPostMetadata('src/posts');
  const sortedPosts = postsSorting(postMetadata);
  return (
    <div className='w-full pt-[30px]'>
      <div className='backImage flex w-full flex-col items-center gap-[20px] tablet:py-[31px] desktop:py-[48px]'>
        <h1 className='z-[5] font-unbound text-[45px] font-bold uppercase leading-[1] tablet:text-[60px] desktop:text-[90px]'>
          Insights
        </h1>
        <NextLinePreposition
          tag='p'
          text='Case studies, research and experience in detail'
          className='z-[5] px-[70px] text-center font-proxima text-[20px] leading-[1.2] text-[#00030C]'
        />
      </div>
      <div className='px-[10px] tablet:px-[40px]'>
        <PostsComponent posts={sortedPosts} />
      </div>
    </div>
  );
}
