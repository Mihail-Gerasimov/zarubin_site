// import { Featured } from '@/src/components/Featured/Featured';
import { SocialFollow } from '@/src/components/SocialFollow/SocialFollow';
import { BackLink } from '@/src/ui-kit/BackLink/BackLink';
// import { formattedDate } from '@/src/utils/formattedDate';
import line from '@/public/assets/images/png/line.png';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import path from 'path';
import classNames from 'classnames';
import { BASE_URL } from '@/src/utils/alias';
import { ideaMarking } from '@/src/utils/IdeaMarking/ideaMarking';

const URL = process.env.NODE_ENV === 'production' ? BASE_URL : '';

const findMarkdownFile = (dir: string, slug: string): string | null => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      const result = findMarkdownFile(filePath, slug);
      if (result) return result;
    } else if (file.endsWith('.md') && file.replace('.md', '') === slug) {
      return filePath;
    }
  }
  return null;
};

const getPostContent = (slug: string) => {
  const folder = 'src/expertise/';
  const file = findMarkdownFile(folder, slug);

  if (file) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const matterResult = matter(content);
      return matterResult;
    } catch (error) {
      console.error('Error reading file:', error);
      return null;
    }
  } else {
    console.error('File not found');
    return null;
  }
};

export default function ExpertiseCase(props: { params: { slug: string } }) {
  const slug = props.params.slug;
  const expertiseCaseContent = getPostContent(slug);

  if (!expertiseCaseContent) {
    // return <NotFoundPage slug={slug} />;
    return <div>Page {slug} not found</div>;
  }

  console.log('getPostContent', getPostContent(slug));

  //   const date = formattedDate(expertiseCaseContent.data.date);

  const {
    // type,
    // tag,
    title,
    // authorName,
    // authorImage,
    // downloadLink,
    // readingTime,
  } = expertiseCaseContent.data;

  const image = expertiseCaseContent.data.image
    ? expertiseCaseContent.data.image
    : '/assets/images/banner/default_img.webp';

  const hashtagRegex = /#[A-Za-z_]+/g;
  const regexFont = /<font color='(.+?)'>(.+?)<\/font>/g;

  const ideaRegx = /\[\[(.*?)\]\]/g;
  const ideaMatches = expertiseCaseContent.content.match(ideaRegx);

  const extractedHashtags =
    expertiseCaseContent.content.match(hashtagRegex) ?? [];

  const allPosts = expertiseCaseContent.content
    .replace(regexFont, () => {
      const tags = extractedHashtags
        .map((hashtag) => {
          const tag = hashtag.split('#');
          return `<li class="">
      <span class="">${tag[1]}</span>
    </li>`;
        })
        .join('');

      return `<ul class="">${tags}</ul>`;
    })

    .replace(ideaRegx, () => {
      if (!ideaMatches) {
        return '';
      }
      let matches;
      while ((matches = ideaRegx.exec(expertiseCaseContent.content)) !== null) {
        const content = matches[1];
        return ideaMarking(content);
      }

      return '';
    });

  return (
    <div className='mainContainer w-full px-[10px] pb-[30px] tablet:px-[40px] tablet:pb-[40px] desktop:pb-[60px]'>
      <BackLink linkName='/expertise' />
      <div
        className='absolute left-0 top-0 h-[150px] w-full bg-cover bg-center bg-no-repeat opacity-[40%] tablet:h-[302px] laptop:h-[342px]'
        style={{
          backgroundImage: `url(${URL + image})`,
          zIndex: '-1',
        }}
      ></div>
      <div className='mx-[auto] max-w-[896px] pb-[30px]'>
        <div
          className={classNames(
            `relative flex w-full items-center justify-center`,
            // {
            //   'tablet:py-[40px]': type === POST_TYPE.RESEARCH,
            //   'py-[30px] desktop:py-[60px]': type !== POST_TYPE.MANIFESTO,
            // },
          )}
        >
          {/* <span className='z-[5] rounded-[2px] bg-text-dark p-[10px] font-proxima text-[16px] text-white tablet:text-[20px]'>
            {type ? type : POST_TYPE.NOTES}
          </span> */}
          <Image
            src={line}
            width={300}
            height={400}
            alt='line'
            className='absolute z-[1] h-[4px] w-full'
          />
        </div>
        {
          // type === POST_TYPE.RESEARCH ? (
          //   <span className='mb-[20px] hidden font-proxima text-[16px] leading-[1.25] text-text-dark opacity-[50%] desktop:block'>
          //     Reading time: {readingTime}
          //   </span>
          // ) : (
          //   <span className='relative z-[10] mb-[20px] block font-proxima text-[16px] leading-[1.25] text-text-dark opacity-[50%]'>
          //     {date}
          //   </span>
          // )
        }
        <div className=''>
          <h1
            className={`font-proxima text-[28px] font-bold leading-[1.1] text-text-dark `}
          >
            {title}
          </h1>
          <div className='flex flex-col tablet:flex-col-reverse'>
            {/* {downloadLink && tag === 'Research' && (
              <DownloadLink link={downloadLink} />
            )} */}
            {/* {type !== POST_TYPE.MANIFESTO && (
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
            )} */}
          </div>
        </div>
        <article
          className={`prose w-full max-w-[100%] pb-[30px] text-white prose-p:text-[16px] prose-p:text-text-dark/80 prose-li:text-[16px] prose-li:text-text-dark/80 tablet:pb-[40px] desktop:pb-[60px]`}
        >
          <Markdown className={` z-20 w-full font-proxima`}>
            {allPosts}
          </Markdown>
        </article>
        <SocialFollow />
        {/* <div className='desktop:bp-0 relative z-[5] mt-[60px] pb-[20px]'>
          <Featured slug={slug} posts={getAllPosts()} />
        </div> */}
      </div>
    </div>
  );
}
