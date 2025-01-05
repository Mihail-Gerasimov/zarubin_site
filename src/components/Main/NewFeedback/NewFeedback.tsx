import { FeedbackDataMain } from '@/src/utils/DataLayers/FeedbackData';
import { NewFeedbackClient } from './NewFeedbackClient';

export const NewFeedback = () => {
  return <NewFeedbackClient feedback={FeedbackDataMain} />;
};
