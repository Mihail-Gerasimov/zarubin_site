import { Hero } from '@/src/components/BusinessObjectives/SingleCasePage/Hero/Hero';
import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { Insights } from '@/src/components/Main/Insights/Insights';
import { Container } from '@/src/components/shared/Container/Container';
import { ScrollAnimationWrapper } from '@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper';
import { Section } from '@/src/components/shared/Section/Section';
import { contentTrimming } from '@/src/utils/contentTrimming';
import { getCaseMetadata } from '@/src/utils/getCaseMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import styles from './Case.module.css';

const getCaseContent = (slug: string) => {
  const folder = 'src/cases/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getCaseMetadata('src/cases');
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getCaseContent(params.slug);
  const title = post.data.title;
  const description = contentTrimming(post.data.description, 150);

  return {
    title: title,
    description,
    openGraph: {
      images: [{ url: post.data.image }],
      title: title,
      description,
    },
  };
}

export default async function CasePage(props: { params: { slug: string } }) {
  const slug = props.params.slug;
  const post = getCaseContent(slug);

  const { industries, title, tag, images } = post.data;

  console.log('IMG', images);

  const hashtagRegex = /#[A-Za-z_]+/g;
  const regexFont = /<font color='(.+?)'>(.+?)<\/font>/g;
  const regexImage = /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g;

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

  const paragraphs = allPosts
    .split('## ')
    .slice(1)
    .map((p, index) => ({
      index,
      images: p.match(regexImage)?.join() || '',
      content: '## ' + p.replace(regexImage, '').replace(/(^[ \t]*\n)/gm, ''),
    }));

  // console.log('POSTS', allPosts);

  // console.log('IMAGES', paragraphs);

  return (
    <main className='flex flex-col gap-[60px] overflow-hidden'>
      <Section id='hero' className='relative py-0 tablet:py-0 desktop:pb-0'>
        <Container>
          <Hero title={title} tag={tag} industries={industries} />
        </Container>
      </Section>
      <Section light>
        <Container className='grid grid-cols-1 gap-[40px] desktop:grid-cols-2'>
          <div className='flex flex-col gap-[60px]'>
            {paragraphs.map((p, index) => (
              <ScrollAnimationWrapper key={index} showOnLoad={index === 0}>
                {/* <div className='grid gap-[40px] desktop:grid-cols-1'> */}
                {/* <div className='grid gap-[40px]'> */}
                <Markdown
                  className={`${styles.markdown} flex w-full flex-col gap-[20px] font-proxima`}
                >
                  {p.content}
                </Markdown>
                {/* </div> */}
              </ScrollAnimationWrapper>
            ))}
          </div>
          <div className='flex flex-col gap-[40px]'>
            {images.map((image: string, idx: number) => (
              <Image
                key={idx}
                src={image}
                width={700}
                height={900}
                quality={80}
                alt={``}
                className='h-[auto] w-full'
              />
            ))}
          </div>
        </Container>
      </Section>
      <Section id='insights' className='py-0 tablet:py-0 desktop:py-0'>
        <ScrollAnimationWrapper>
          <Insights />
        </ScrollAnimationWrapper>
      </Section>{' '}
      <Section
        id='contacts'
        light
        className='py-[40px] tablet:py-[80px] desktop:py-[80px]'
      >
        <Container>
          <ContactForm />
        </Container>
      </Section>
    </main>
  );
}
