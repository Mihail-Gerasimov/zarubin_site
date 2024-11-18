'use client';

import { Post } from '@/src/utils/types';
import { ExpertiseCard } from '../ExpertiseCard/ExpertiseCard';
// import useMediaQuery from '@/src/utils/useMediaQuery';

interface IExpertise {
  expertiseData: Post[];
}

export const ExpertiseClient = ({ expertiseData }: IExpertise) => {
  //   const mobile = useMediaQuery('<tablet');
  //   const tablet = useMediaQuery('<laptop');
  //   const isStilTablet = useMediaQuery('>mobile');
  //   const isTablet = tablet === isStilTablet;

  return (
    <div className='grid grid-cols-1 gap-x-[20px] gap-y-[20px] tablet:grid-cols-2 laptop-big:grid-cols-3'>
      {expertiseData.map((item, idx) => (
        <div key={idx} className=''>
          <ExpertiseCard data={item} />
        </div>
      ))}
    </div>
  );
};
