import { Header } from '@/src/components/Header/Header';
import { PostList } from '@/src/components/NavList/PostList';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
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
  const post = getPostContent(params.slug);
  const id = params?.slug ? ' . ' + params?.slug : '';
  const title = post.data.title;
  const description =
    post.data.description.length < 30
      ? post.data.description
      : post.data.description.slice(0, 35).trim() + '...';

  return {
    title: `The Blog ${id.replaceAll('_', ' ')}`,
    description,
    openGraph: {
      images: [{ url: post.data.image }],
      title: `Post - ${title}`,
      description,
    },
  };
}

export default function BlogSlug(props: { params: { slug: string } }) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const image = post.data.image
    ? post.data.image
    : '/assets/images/frame_2.png';

  const hashtagRegex = /#[A-Za-z_]+/g;
  const regexFont = /<font color='(.+?)'>(.+?)<\/font>/g;

  const extractedHashtags = post.content.match(hashtagRegex) ?? [];

  const allPosts = post.content.replace(regexFont, () => {
    const tags = extractedHashtags
      .map((hashtag) => {
        const tag = hashtag.split('#');
        return `<li class="${styles.tagItem}">
      <span class="${styles.tag}">${tag[1]}</span>
    </li>`;
      })
      .join('');

    return `<ul class="${styles.tagList}">${tags}</ul>`;
  });

  return (
    <>
      <Header>
        <PostList />
      </Header>
      <main
        className='px-[10px] w-full relative overflow-hidden tablet:px-[40px] mainContainer'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <article
          className={`prose pt-[160px] pb-[24px] max-w-[896px] mx-[auto] text-white tablet:pt-[204px] tablet:pb-[40px] desktop:pt-[300px] desktop:pb-[60px] desktop-big:pt-[372px] z-10 relative`}
        >
          <Markdown className={`font-manrope z-20 ${styles.markdown}`}>
            {allPosts}
          </Markdown>
        </article>
      </main>
    </>
  );
}
