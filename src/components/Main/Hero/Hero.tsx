import { ImprovingMetrcsCard } from './ImprovingMetricsCard';
import { SuccessCard } from './SuccessCard';
import { TitleContent } from './TitleContent';

export const Hero = () => {
  return (
    <div className='px-[10px] desktop-hard:px-[40px]'>
      <div
        className={`relative flex flex-col gap-[40px] py-[40px] desktop:flex-row desktop:justify-between desktop:py-[145px]`}
      >
        <TitleContent />
        <div className='z-[5] flex flex-col gap-[21px] tablet:min-w-[539px]'>
          <SuccessCard />
          <ImprovingMetrcsCard />
        </div>
      </div>
    </div>
  );
};
