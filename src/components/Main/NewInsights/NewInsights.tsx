import { getInsightsMetadata } from '@/src/utils/getInsightsMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import { NewInsightsClient } from './NewInsightsClient';

export const NewInsights = () => {
  const postMetadata = getInsightsMetadata();
  const sortedPosts = postsSorting(postMetadata);
  return <NewInsightsClient posts={sortedPosts} />;
};
