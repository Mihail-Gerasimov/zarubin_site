import { PostsComponent } from '@/src/components/PostsComponent/PostsComponent';
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
      <main className='mt-[80px] pt-[30px] w-full'>
        <div className='backImage w-full tablet:py-[31px] desktop:py-[48px] flex flex-col items-center gap-[20px]'>
          <h1 className='text-[45px] leading-[1] uppercase font-unbound font-bold z-[5] tablet:text-[60px] desktop:text-[90px]'>
            Insights
          </h1>
          <p className='font-proxima text-[20px] text-[#00030C] leading-[1.2] z-[5] text-center'>
            Case studies, research and experience in detail
          </p>
        </div>
        <div className='px-[10px] tablet:px-[40px]'>
          <PostsComponent posts={sortedPosts} />
        </div>
      </main>
    </>
  );
}
