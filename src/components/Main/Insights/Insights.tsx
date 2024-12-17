import { getInsightsMetadata } from '@/src/utils/getInsightsMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import { InsightsClient } from './InsightsClient';

export const Insights = () => {
  const postMetadata = getInsightsMetadata();
  const sortedPosts = postsSorting(postMetadata);
  return <InsightsClient posts={sortedPosts} />;
};
