import { Header } from '@/src/components/Header/Header';
import { PostList } from '@/src/components/NavList/PostList';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
// import Image from 'next/image';
// import styles from './Post.module.css';

const getPostContent = (slug: string) => {
  const folder = 'src/posts/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata('src/posts');
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const id = params?.slug ? ' . ' + params?.slug : '';

  return {
    title: `The Blog ${id.replaceAll('_', ' ')}`,
  };
}

export default function BlogSlug(props: { params: { slug: string } }) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <Header>
        <PostList />
      </Header>
      {/* <div
        style={{
          backgroundImage: `url(${post.data.image})`,
        }}
        className={styles.bannerContainer}
      /> */}
      <main className='px-[14px] py-[20px] pb-[78px] w-full'>
        <article className='prose max-w-[896px] mx-[auto] text-white'>
          <Markdown className='py-[20px_40px]'>{post.content}</Markdown>
        </article>
      </main>
    </>
  );
}
