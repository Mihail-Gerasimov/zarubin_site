import { getPostMetadata } from '@/src/utils/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

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

export default function BlogsPage(props: { params: { slug: string } }) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <article
      className='prose max-w-[896px] mx-[auto] '
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
      }}
    >
      <Markdown className='px-[24px] py-[40px_60px]'>{post.content}</Markdown>
    </article>
  );
}
