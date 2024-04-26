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
      <main className='mb-[40px] px-[14px] p-[20px] pb-[150px] w-full overflow-hidden tablet:pb-[78px]'>
        <div className='mx-auto py-12 max-w-[896px] flex flex-col items-center gap-12'>
          {sortedPosts.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
