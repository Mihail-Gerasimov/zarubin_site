import Image from 'next/image';

import img1 from '@/public/assets/images/expertise/project_risk_1.png';
import img2 from '@/public/assets/images/expertise/project_risk_2.png';

export const ProjectRiskImg = () => {
  return (
    <div className='grid h-[140px] w-full grid-cols-2 gap-[20px] tablet:h-[241px] desktop:h-[362px]'>
      <div className='relative flex flex-col justify-end p-[20px] after:absolute after:inset-0 after:bg-gradient-to-t after:from-white after:to-[rgba(255,255,255,0)]'>
        <div className='z-10 font-proxima text-4xl font-bold leading-10 text-slate-900'>
          Analyzing the current situation
        </div>
        <Image
          src={img1}
          fill
          className='absolute inset-0 object-cover'
          alt='Analyzing the current situation'
        />
      </div>
      <div className='after:to-[#FF 013EDF] relative flex flex-col justify-end p-[20px] p-[20px] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#013EDF]'>
        <div className='z-10 font-proxima text-4xl font-bold leading-10 text-white'>
          Making an action plan
        </div>
        <Image
          src={img2}
          fill
          className='absolute inset-0 object-cover'
          alt='Making an action plan'
        />
      </div>
    </div>
  );
};
