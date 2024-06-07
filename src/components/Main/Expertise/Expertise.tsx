import { ExpertiseCard } from '@/src/components/Main/Expertise/ExpertiseCard/ExpertiseCard';
import { ExpertiseData } from '@/src/utils/DataLayers/ExpertiseData';

export const Expertise = () => {
  return (
    <div className='px-[10px] tablet:px-[40px] tablet:pb-[40px] desktop:px-[80px] desktop:py-[35px]'>
      <h2 className='font-unbound text-[45px] font-bold uppercase leading-[1] tablet:text-[50px] tablet:leading-[1.3] desktop:text-[70px] desktop:leading-[1.1]'>
        Expertise and expirence
      </h2>
      <ul className='mt-[20px] flex flex-col gap-[20px] tablet:mt-[8px] tablet:gap-0 desktop:mt-[40px]'>
        {ExpertiseData.map((item) => (
          <li key={item.id}>
            <ExpertiseCard
              isEven={item.id % 2 === 0}
              title={item.title}
              subData={item.data}
              image={item.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
