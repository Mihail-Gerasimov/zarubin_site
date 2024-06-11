import { FeedbackDataMain } from '@/src/utils/DataLayers/FeedbackData';
import { FeedbackClient } from './FeedbackClient';

export const Feedback = () => {
  return <FeedbackClient feedback={FeedbackDataMain} />;
};
