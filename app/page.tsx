import { BlogCard } from '@/src/components/BlogCard/BlogCard';
import { getPostMetadata } from '@/src/utils/getPostMetadata';

export default function Home() {
  const postMetadata = getPostMetadata('src/recipes');

  return (
    <div className=''>
      {postMetadata.map((post, idx) => (
        <BlogCard key={idx} post={post} />
      ))}
    </div>
  );
}
