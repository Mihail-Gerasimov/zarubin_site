import { getPostMetadata } from '@/src/utils/getPostMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import { InsightsClient } from './InsightsClient';

export const Insights = () => {
  const postMetadata = getPostMetadata('src/posts');
  const sortedPosts = postsSorting(postMetadata);
  return <InsightsClient posts={sortedPosts} />;
};
