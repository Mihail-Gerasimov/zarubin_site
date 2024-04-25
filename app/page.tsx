import { BlogCard } from '@/src/components/BlogCard/BlogCard';
import { Header } from '@/src/components/Header/Header';
import { MainList } from '@/src/components/NavList/MainList';
import { getPostMetadata } from '@/src/utils/getPostMetadata';

export default function Home() {
  const postMetadata = getPostMetadata('src/posts');

  return (
    <>
      <Header>
        <MainList />
      </Header>
      <main className='px-[14px] py-[20px] pb-[78px] w-full'>
        <div className='mx-auto py-12 max-w-[896px] flex flex-col items-center gap-12'>
          {postMetadata.reverse().map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
