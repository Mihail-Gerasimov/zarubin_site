import { Header } from '@/src/components/Header/Header';
import { PostList } from '@/src/components/NavList/PostList';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import styles from './Post.module.css';

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
  const image = post.data.image
    ? post.data.image
    : '/assets/images/frame_2.png';

  return (
    <>
      <Header>
        <PostList />
      </Header>
      <main
        className='mb-[40px] px-[14px] p-[20px] pb-[78px] w-full overflow-hidden'
        style={{
          background: `linear-gradient(to bottom, rgba(117, 0, 128, 0.0) , #4f0356 200px)`,
        }}
      >
        <Image
          src={image}
          width={300}
          height={180}
          alt=''
          className={styles.bannerContainer}
          unoptimized
        />
        <article
          className={`prose max-w-[896px] mx-[auto] text-white ${styles.atr}`}
        >
          <Markdown className='py-[20px_40px]'>{post.content}</Markdown>
        </article>
      </main>
    </>
  );
}
