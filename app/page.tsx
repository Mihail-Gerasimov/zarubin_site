import { BlogCard } from '@/src/components/BlogCard/BlogCard';
import { Header } from '@/src/components/Header/Header';
import { MainList } from '@/src/components/NavList/MainList';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import { DateTime } from 'luxon';

export default function Home() {
  const postMetadata = getPostMetadata('src/posts');

  const sortedPosts = postMetadata.sort((a, b) => {
    const dateA = DateTime.fromFormat(a.date, 'dd-MM-yyyy');
    const dateB = DateTime.fromFormat(b.date, 'dd-MM-yyyy');
    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });

  return (
    <>
      <Header>
        <MainList />
      </Header>
      <main className='px-[10px] w-full tablet:px-[40px]'>
        <div className='w-full h-[100%] absolute top-0 left-0 z-[-1] bg-mobile-banner bg-no-repeat bg-contain tablet:bg-tablet-banner desktop:bg-desktop-banner' />
        <div className='mx-auto pt-[180px] pb-[24px] max-w-[876px] flex flex-col items-center gap-[16px] tablet:pt-[240px] tablet:pb-[40px] tablet:gap-[24px] desktop:pb-[60px] desktop:gap-[40px] desktop:pt-[300px] desktop-big:pt-[380px]'>
          {sortedPosts.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
