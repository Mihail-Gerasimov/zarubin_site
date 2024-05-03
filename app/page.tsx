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
      <main className='px-[14px] w-full tablet:pb-[78px]'>
        <div className='w-full h-[100%] absolute top-0 left-0 z-[-1] bg-mobile-banner bg-no-repeat bg-contain tablet:bg-tablet-banner desktop:bg-desktop-banner' />
        <div className='mx-auto pt-[180px] max-w-[896px] flex flex-col items-center gap-12 tablet:pt-[240px] desktop:pt-[300px] desktop-big:pt-[380px]'>
          {sortedPosts.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
