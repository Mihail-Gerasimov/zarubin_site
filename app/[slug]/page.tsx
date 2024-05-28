import DownloadIcon from '@/public/assets/images/icons/download.svg';
import line from '@/public/assets/images/png/line.png';
import { Featured } from '@/src/components/Featured/Featured';
import { SocialFollow } from '@/src/components/SocialFollow/SocialFollow';
import { BackLink } from '@/src/ui-kit/BackLink/BackLink';
import { BASE_URL } from '@/src/utils/alias';
import { formattedDate } from '@/src/utils/formattedDate';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import { ideaMarking } from '@/src/utils/IdeaMarking/ideaMarking';
import { postsSorting } from '@/src/utils/postsSorting';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import Link from 'next/link';
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
  const title = post.data.title;
  const authorName = post.data.authorName;
  const authorImage = post.data.authorImage;
  const downloadLink = post.data.downloadLink;
  const image = post.data.image
    ? post.data.image
    : '/assets/images/post/frame_2.png';

  const hashtagRegex = /#[A-Za-z_]+/g;
  const regexFont = /<font color='(.+?)'>(.+?)<\/font>/g;

  const regexSrc =
    /<img[^>]*class=['"]avatarImage['"][^>]*src=['"]([^'"]*)['"][^>]*>/;
  const matchSrc: RegExpMatchArray | null = post.content.match(regexSrc);

  const imageRegz = /<img[^>]*class=['"]avatarImage['"][^>]*\/>/;

  const ideaRegx = /\[\[(.*?)\]\]/g;
  const ideaMatches = post.content.match(ideaRegx);

  const extractedHashtags = post.content.match(hashtagRegex) ?? [];

  const allPosts = post.content
    .replace(regexFont, () => {
      const tags = extractedHashtags
        .map((hashtag) => {
          const tag = hashtag.split('#');
          return `<li class="${styles.tagItem}">
      <span class="${styles.tag}">${tag[1]}</span>
    </li>`;
        })
        .join('');

      return `<ul class="${styles.tagList}">${tags}</ul>`;
    })
    .replace(imageRegz, () => {
      if (!matchSrc) {
        return `<img src='' alt='avatar' />`;
      }
      const src = matchSrc[1];
      return `<img src='${src}' className='${styles.authorImg}' alt='avatar' />`;
    })
    .replace(ideaRegx, () => {
      if (!ideaMatches) {
        return '';
      }
      let matches;
      while ((matches = ideaRegx.exec(post.content)) !== null) {
        const content = matches[1];
        return ideaMarking(content);
      }

      return '';
    });

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
        <div className=''>
          <h1 className='font-proxima font-bold text-[28px] text-text-dark leading-[1.1]'>
            {title}
          </h1>
          <div className='flex flex-col tablet:flex-col-reverse'>
            {downloadLink && tag === 'Research' && (
              <Link
                href={downloadLink}
                download
                target='_blank'
                className='mt-[12px] mb-[12px] p-[10px] w-[262px] flex items-start gap-[12px] bg-main-bg  rounded-[5px] tablet:mb-0 tablet:mt-[20px]'
              >
                <DownloadIcon className='w-[20px] h-[auto]' />
                <div className='flex flex-col text-white'>
                  <span className='text-[12px]'>Download the research</span>
                  <span className='text-[12px]'>
                    Downloaded 152 times already
                  </span>
                </div>
              </Link>
            )}
            {tag !== 'Manifesto' && (
              <div
                className={`flex flex-col tablet:flex-row tablet:justify-between tablet:mt-[20px] ${tag === 'Notes' && 'mt-[20px] mb-[10px] tablet:mt-[40px] desktop:mt-[20px] desktop:mb-[40px]'}`}
              >
                <div className={`flex items-center`}>
                  <Image
                    src={authorImage}
                    width={49}
                    height={49}
                    alt={authorName}
                    className='tablet:w-[80px] rounded-full'
                  />
                  <div className='ml-[12px] flex flex-col tablet:ml-[20px] tablet:min-w-[309px]'>
                    <span className='font-proxima font-bold text-[18px] text-text-dark leading-[1.33]'>
                      Written by {authorName}
                    </span>
                    <span className='font-proxima text-[18px] text-text-dark leading-[1.33]'>
                      {date}
                    </span>
                  </div>
                </div>
                {tag === 'Research' && (
                  <div className='mt-[20px] py-[12px] tablet:mt-0 tablet:p-[0]'>
                    <SocialFollow isRight />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <article
          className={`prose prose-p:text-[16px] prose-li:text-[16px] max-w-[100%] pb-[30px] w-full text-white tablet:pb-[40px] desktop:pb-[60px]`}
        >
          <Markdown
            className={`${styles.markdown} ${tag === 'Research' && styles.research} w-full font-proxima z-20`}
          >
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
