import { getInsightsMetadata } from '@/src/utils/getInsightsMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import { NewInsightsClient } from './NewInsightsClient';

const postMetadata = getInsightsMetadata();
const sortedPosts = postsSorting(postMetadata);

export const NewInsights = () => {
  return <NewInsightsClient posts={sortedPosts} />;
};
