import { DynamicPostNotFound } from '@/src/components/DynamicNotFound/DynamicPostNotFound';

const NotFoundPage = ({ slug }: { slug: string }) => {
  return (
    <main className='flex flex-col gap-[60px] overflow-hidden py-[60px] desktop:py-[80px]'>
      <DynamicPostNotFound slug={slug} />
    </main>
  );
};

export default NotFoundPage;
