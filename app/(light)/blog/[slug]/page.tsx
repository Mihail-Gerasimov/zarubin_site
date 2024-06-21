import line from '@/public/assets/images/png/line.png';
import { Featured } from '@/src/components/Featured/Featured';
import { SocialFollow } from '@/src/components/SocialFollow/SocialFollow';
import { AuthorInfo } from '@/src/ui-kit/AuthorInfo/AuthorInfo';
import { BackLink } from '@/src/ui-kit/BackLink/BackLink';
import { DownloadLink } from '@/src/ui-kit/DownloadLink/DownloadLink';
import { BASE_URL } from '@/src/utils/alias';
import { contentTrimming } from '@/src/utils/contentTrimming';
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
  const description = contentTrimming(post.data.description, 150);

  return {
    title: `${id.replaceAll('_', ' ')}`,
    description,
    openGraph: {
      images: [{ url: post.data.image }],
      title: `${title}`,
      description,
    },
  };
}

export default function MainBlogSlug(props: { params: { slug: string } }) {
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
    : '/assets/images/banner/default_logo.png';

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
    <div className='mainContainer mt-[80px] w-full px-[10px] pb-[30px] tablet:px-[40px] tablet:pb-[40px] desktop:pb-[60px]'>
      {type !== POST_TYPE.MANIFESTO && (
        <div
          className='absolute left-0 top-0 h-[150px] w-full bg-cover bg-center bg-no-repeat opacity-[40%] tablet:h-[302px] laptop:h-[342px]'
          style={{
            backgroundImage: `url(${URL + image})`,
            zIndex: '-1',
          }}
        ></div>
      )}
      <BackLink linkName='/blog' />
      <div className='mx-[auto] max-w-[896px] pb-[30px]'>
        <div
          className={`relative flex w-full items-center justify-center py-[30px] desktop:py-[60px] ${type === POST_TYPE.RESEARCH && 'tablet:py-[40px]'}`}
        >
          <span className='z-[5] rounded-[2px] bg-text-dark p-[10px] font-proxima text-[16px] text-white tablet:text-[20px]'>
            {type ? type : POST_TYPE.NOTES}
          </span>
          <Image
            src={line}
            width={300}
            height={400}
            alt='line'
            className='absolute z-[1] h-[4px] w-full'
          />
        </div>
        {type === POST_TYPE.RESEARCH ? (
          <span className='mb-[20px] hidden font-proxima text-[16px] leading-[1.25] text-text-dark opacity-[50%] desktop:block'>
            Reading time: {readingTime}
          </span>
        ) : (
          <span className='relative z-[10] mb-[20px] block font-proxima text-[16px] leading-[1.25] text-text-dark opacity-[50%]'>
            {date}
          </span>
        )}
        <div className=''>
          <h1
            className={`font-proxima text-[28px] font-bold leading-[1.1] text-text-dark ${type === POST_TYPE.MANIFESTO && 'mb-[40px] tablet:mb-[40px] desktop:mb-[60px]'} `}
          >
            {title}
          </h1>
          <div className='flex flex-col tablet:flex-col-reverse'>
            {downloadLink && tag === 'Research' && (
              <DownloadLink link={downloadLink} />
            )}
            {type !== POST_TYPE.MANIFESTO && (
              <div
                className={`flex flex-col tablet:mt-[20px] tablet:flex-row tablet:justify-between ${type === POST_TYPE.NOTES && 'mb-[10px] mt-[20px] tablet:mt-[40px] desktop:mb-[40px] desktop:mt-[20px]'}`}
              >
                <AuthorInfo image={authorImage} name={authorName} date={date} />
                {type === POST_TYPE.RESEARCH && (
                  <div className='mt-[20px] py-[12px] tablet:ml-[auto] tablet:mt-0 tablet:p-[0]'>
                    <SocialFollow isRight />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <article
          className={`prose prose-p:text-[16px] ${type === POST_TYPE.MANIFESTO && 'manifesto-list'} w-full max-w-[100%] pb-[30px] text-white prose-p:text-text-dark/80 prose-li:text-[16px] prose-li:text-text-dark/80 tablet:pb-[40px] desktop:pb-[60px]`}
        >
          <Markdown
            className={`${styles.markdown} ${type === POST_TYPE.RESEARCH && styles.research} z-20 w-full font-proxima`}
          >
            {allPosts}
          </Markdown>
        </article>
        <SocialFollow />
        <div className='desktop:bp-0 relative z-[5] mt-[60px] pb-[20px]'>
          <Featured slug={slug} posts={getAllPosts()} />
        </div>
      </div>
    </div>
  );
}
