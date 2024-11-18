import { Post } from '@/src/utils/types';
import { ExpertiseCard } from '../ExpertiseCard/ExpertiseCard';

interface IExpertise {
  expertiseData: Post[];
}

export const ExpertiseClient = ({ expertiseData }: IExpertise) => {
  return (
    <div className='grid grid-cols-1 gap-x-[20px] gap-y-[20px] tablet:grid-cols-2 laptop:grid-cols-3'>
      {expertiseData.map((item, idx) => (
        <div key={idx} className=''>
          <ExpertiseCard data={item} />
        </div>
      ))}
    </div>
  );
};
