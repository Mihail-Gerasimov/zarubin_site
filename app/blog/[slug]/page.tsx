import { getPostMetadata } from '@/src/utils/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
  const folder = 'src/recipes/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata('src/recipes');
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
    <article className='prose'>
      <Markdown>{post.content}</Markdown>
    </article>
  );
}
