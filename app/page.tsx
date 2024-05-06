import { Header } from '@/src/components/Header/Header';
import { MainList } from '@/src/components/NavList/MainList';
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
      <Header>
        <MainList />
      </Header>
      <main className='backImage px-[10px] w-full tablet:px-[40px]'>
        <PostsComponent posts={sortedPosts} />
      </main>
    </>
  );
}
