import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';
import { getInsightsMetadata } from '@/src/utils/getInsightsMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import { NewInsightsClient } from './NewInsightsClient';

const expertiseMetadata = getExpertiseMetadata();
const postMetadata = getInsightsMetadata();
const sortedPosts = postsSorting([...postMetadata, ...expertiseMetadata]);

export const NewInsights = () => {
  return <NewInsightsClient posts={sortedPosts} />;
};
