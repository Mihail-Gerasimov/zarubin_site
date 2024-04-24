import { BlogCard } from '@/src/components/BlogCard/BlogCard';
import { getPostMetadata } from '@/src/utils/getPostMetadata';

export default function Home() {
  const postMetadata = getPostMetadata('src/posts');

  return (
    <div className='mx-auto py-12 max-w-[768px] flex flex-col items-center gap-12'>
      {postMetadata.map((post, idx) => (
        <BlogCard key={idx} post={post} />
      ))}
    </div>
  );
}
