import line from '@/public/assets/images/png/line.png';
import { Featured } from '@/src/components/Featured/Featured';
import { SocialFollow } from '@/src/components/SocialFollow/SocialFollow';
import { AuthorInfo } from '@/src/ui-kit/AuthorInfo/AuthorInfo';
import { BackLink } from '@/src/ui-kit/BackLink/BackLink';
import { DownloadLink } from '@/src/ui-kit/DownloadLink/DownloadLink';
import { BASE_URL } from '@/src/utils/alias';
import { formattedDate } from '@/src/utils/formattedDate';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import { ideaMarking } from '@/src/utils/IdeaMarking/ideaMarking';
import { postsSorting } from '@/src/utils/postsSorting';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import styles from './Post.module.css';

const URL = process.env.NODE_ENV === 'production' ? BASE_URL : '';

const POST_TYPE = {
  NOTES: 'Notes',
  RESEARCH: 'Research',
  MANIFESTO: 'Manifesto',
};

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
  const date = formattedDate(post.data.date);
  const {
    type,
    tag,
    title,
    authorName,
    authorImage,
    downloadLink,
    readingTime,
  } = post.data;
  const image = post.data.image
    ? post.data.image
    : '/assets/images/post/frame_2.png';

  const hashtagRegex = /#[A-Za-z_]+/g;
  const regexFont = /<font color='(.+?)'>(.+?)<\/font>/g;

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
      {type !== POST_TYPE.MANIFESTO && (
        <div
          className='absolute top-0 left-0 h-[150px] w-full bg-cover bg-no-repeat bg-center tablet:h-[302px] laptop:h-[342px] opacity-[40%]'
          style={{
            backgroundImage: `url(${URL + image})`,
            zIndex: '-1',
          }}
        ></div>
      )}
      <BackLink linkName='/' />
      <div className='mx-[auto] max-w-[896px] pb-[30px]'>
        <div
          className={`py-[30px] w-full relative flex items-center justify-center desktop:py-[60px] ${type === POST_TYPE.RESEARCH && 'tablet:py-[40px]'}`}
        >
          <span className='p-[10px] font-proxima text-[16px] text-white bg-text-dark rounded-[2px] z-[5] tablet:text-[20px]'>
            {type ? type : POST_TYPE.NOTES}
          </span>
          <Image
            src={line}
            width={300}
            height={400}
            alt='line'
            className='w-full h-[4px] absolute z-[1]'
          />
        </div>
        {type === POST_TYPE.RESEARCH ? (
          <span className='mb-[20px] hidden font-proxima text-[16px] text-text-dark leading-[1.25] opacity-[50%] desktop:block'>
            Reading time: {readingTime}
          </span>
        ) : (
          <span className='relative mb-[20px] block font-proxima text-[16px] text-text-dark leading-[1.25] z-[10] opacity-[50%]'>
            {date}
          </span>
        )}
        <div className=''>
          <h1 className='font-proxima font-bold text-[28px] text-text-dark leading-[1.1]'>
            {title}
          </h1>
          <div className='flex flex-col tablet:flex-col-reverse'>
            {downloadLink && tag === 'Research' && (
              <DownloadLink link={downloadLink} />
            )}
            {type !== POST_TYPE.MANIFESTO && (
              <div
                className={`flex flex-col tablet:flex-row tablet:justify-between tablet:mt-[20px] ${type === POST_TYPE.NOTES && 'mt-[20px] mb-[10px] tablet:mt-[40px] desktop:mt-[20px] desktop:mb-[40px]'}`}
              >
                <AuthorInfo image={authorImage} name={authorName} date={date} />
                {type === POST_TYPE.RESEARCH && (
                  <div className='mt-[20px] py-[12px] tablet:mt-0 tablet:p-[0] tablet:ml-[auto]'>
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
            className={`${styles.markdown} ${type === POST_TYPE.RESEARCH && styles.research} w-full font-proxima z-20`}
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
