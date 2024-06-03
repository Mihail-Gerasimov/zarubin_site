import { PostsComponent } from '@/src/components/PostsComponent/PostsComponent';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import { postsSorting } from '@/src/utils/postsSorting';

export default function Blog() {
  const postMetadata = getPostMetadata('src/posts');
  const sortedPosts = postsSorting(postMetadata);
  return (
    <main className='mt-[80px] w-full pt-[30px]'>
      <div className='backImage flex w-full flex-col items-center gap-[20px] tablet:py-[31px] desktop:py-[48px]'>
        <h1 className='z-[5] font-unbound text-[45px] font-bold uppercase leading-[1] tablet:text-[60px] desktop:text-[90px]'>
          Insights
        </h1>
        <p className='z-[5] px-[70px] text-center font-proxima text-[20px] leading-[1.2] text-[#00030C]'>
          Case studies, research and experience in detail
        </p>
      </div>
      <div className='px-[10px] tablet:px-[40px]'>
        <PostsComponent posts={sortedPosts} />
      </div>
    </main>
  );
}
