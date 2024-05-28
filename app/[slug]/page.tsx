import line from '@/public/assets/images/png/line.png';
import { Featured } from '@/src/components/Featured/Featured';
import { SocialFollow } from '@/src/components/SocialFollow/SocialFollow';
import { BackLink } from '@/src/ui-kit/BackLink/BackLink';
import { BASE_URL } from '@/src/utils/alias';
import { formattedDate } from '@/src/utils/formattedDate';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import styles from './Post.module.css';

const URL = process.env.NODE_ENV === 'production' ? BASE_URL : '';

const getPostContent = (slug: string) => {
  const folder = 'src/posts/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const matterResult = matter(content);

  return matterResult;
};

const getAllPosts = () => {
  const postMetadata = getPostMetadata('src/posts');
  return postsSorting(postMetadata);
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
  const tag = post.data.tag;
  const date = formattedDate(post.data.date);
  const image = post.data.image
    ? post.data.image
    : '/assets/images/post/frame_2.png';

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

  console.log('slug', slug);

  return (
    <main className='mt-[80px] px-[10px] relative w-full  tablet:px-[40px] mainContainer'>
      <div
        className='absolute top-0 left-0 h-[150px] w-full bg-cover bg-no-repeat bg-center tablet:h-[302px] laptop:h-[342px] opacity-[40%]'
        style={{
          backgroundImage: `url(${URL + image})`,
          zIndex: '-1',
        }}
      ></div>
      <BackLink linkName='/' />
      <div className='mx-[auto] max-w-[896px] pb-[30px]'>
        <div className='py-[30px] w-full relative flex items-center justify-center desktop:py-[60px]'>
          <span className='p-[10px] font-proxima text-[16px] text-white bg-text-dark rounded-[2px] z-[5] tablet:text-[20px]'>
            {tag ? tag : 'Notes'}
          </span>
          <Image
            src={line}
            width={300}
            height={400}
            alt='line'
            className='w-full h-[4px] absolute z-[1]'
          />
        </div>
        <span className='relative mb-[20px] block font-proxima text-[16px] text-text-dark leading-[1.25] z-[10] opacity-[50%]'>
          {date}
        </span>
        <article
          className={`prose max-w-[100%] pb-[24px] w-full text-white tablet:pb-[40px] desktop:pb-[60px] z-10 relative`}
        >
          <Markdown className={`w-full font-proxima z-20 ${styles.markdown}`}>
            {allPosts}
          </Markdown>
        </article>
        <SocialFollow />
        <div className='mt-[30px] pb-[40px] relative z-[5] desktop:bp-0'>
          <Featured slug={slug} posts={getAllPosts()} />
        </div>
      </div>
    </main>
  );
}
