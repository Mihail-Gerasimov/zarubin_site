import NotFoundPage from '@/app/not-found';
import { SocialFollow } from '@/src/components/SocialFollow/SocialFollow';
import { AuthorInfo } from '@/src/ui-kit/AuthorInfo/AuthorInfo';
import { BackLink } from '@/src/ui-kit/BackLink/BackLink';
import { BASE_URL } from '@/src/utils/alias';
import { formattedDate } from '@/src/utils/formattedDate';
import { ideaMarking } from '@/src/utils/IdeaMarking/ideaMarking';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import path from 'path';

type Slug = {
  slug: string;
};

const URL = process.env.NODE_ENV === 'production' ? BASE_URL : '';

export async function generateStaticParams(): Promise<Slug[]> {
  const folder: string = 'src/expertise/';
  const slugs: Slug[] = [];

  function findMarkdownFiles(dir: string): void {
    const files: string[] = fs.readdirSync(dir);
    for (const file of files) {
      const filePath: string = path.join(dir, file);
      const stat: fs.Stats = fs.statSync(filePath);
      if (stat.isDirectory()) {
        findMarkdownFiles(filePath);
      } else if (file.endsWith('.md')) {
        const slug: string = file.replace('.md', '');
        slugs.push({ slug });
      }
    }
  }

  findMarkdownFiles(folder);

  return slugs;
}

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
    return <NotFoundPage />;
  }

  const date = formattedDate(expertiseCaseContent.data.date);

  const { authorName, authorImage } = expertiseCaseContent.data;

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
      <div
        className='absolute left-0 top-0 h-[150px] w-full bg-cover bg-center bg-no-repeat opacity-[40%] tablet:h-[302px] laptop:h-[342px]'
        style={{
          backgroundImage: `url(${URL + image})`,
          zIndex: '-1',
        }}
      ></div>
      <BackLink linkName='expertise' />
      <div className='mx-[auto] max-w-[896px] pb-[30px]'>
        <div className='relative flex w-full items-center justify-center'></div>
        <div className='mt-[200px]'>
          {/* <h1
            className={`font-proxima text-[28px] font-bold leading-[1.1] text-text-dark `}
          >
            {title}
          </h1> */}
        </div>
        <div
          className={`'mb-[10px] mt-[200px] flex flex-col tablet:mt-[20px] tablet:flex-row tablet:justify-between desktop:mb-[40px] desktop:mt-[20px]`}
        >
          {authorImage && (
            <AuthorInfo image={authorImage} name={authorName} date={date} />
          )}
        </div>
        <article
          className={`prose w-full max-w-[100%] pb-[30px] text-white prose-p:text-[16px] prose-p:text-text-dark/80 prose-li:text-[16px] prose-li:text-text-dark/80 tablet:pb-[40px] desktop:pb-[60px]`}
        >
          <Markdown className={` z-20 w-full font-proxima`}>
            {allPosts}
          </Markdown>
        </article>
        <SocialFollow />
      </div>
    </div>
  );
}
