import { CategoryComponent } from '@/src/components/PlaybookClient/CategoryComponent/CategoryComponent';
import { PlaybookHeading } from '@/src/components/PlaybookClient/PlaybookHeading/PlaybookHeading';
import { Section } from '@/src/components/shared/Section/Section';
import { getAllArticles } from '@/src/utils/getAllArticles';
import { Suspense } from 'react';

export default function PlaybookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = getAllArticles();

  return (
    <Section
      id='playbook'
      light
      className='w-full px-[10px] py-[30px] tablet:px-[40px] laptop-big:py-[60px] desktop:px-[75px]'
    >
      <div className='flex flex-col'>
        <Suspense>
          <PlaybookHeading />
        </Suspense>
        <div className='mt-[24px] flex flex-col gap-[24px] tablet:mt-[40px] tablet:gap-[40px]  laptop-big:mt-[80px] laptop-big:flex-row laptop-big:gap-[30px]'>
          <Suspense>
            <CategoryComponent category={data} />
          </Suspense>
          {children}
        </div>
      </div>
    </Section>
  );
}
