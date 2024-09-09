import { Case, getCaseMetadata } from '@/src/utils/getCaseMetadata';
import { BusinessSolvingSlider } from './BusinessSolvingSlider/BusinessSolvingSlider';

export const BusinessSolving = () => {
  const casesMetadata: Case[] = getCaseMetadata('src/cases');
  const spliceData = casesMetadata.splice(0, 4);

  return <BusinessSolvingSlider data={spliceData} />;
};
