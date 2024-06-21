import { CaseBgItemsSvg } from '@/src/components/svg/CaseBgItemsSvg';
import { Case } from '@/src/utils/DataLayers/CasesData';

export const CasesGrid = ({ cases }: { cases: Case[] }) => {
  return (
    <div className='grid grid-cols-1 gap-[40px] tablet:grid-cols-2 desktop-big:grid-cols-3'>
      {cases.map((item) => (
        <CaseCard key={item.id} data={item} />
      ))}
    </div>
  );
};

const CaseCard = ({ data }: { data: Case }) => {
  return (
    <div className='group relative min-h-[423px] cursor-pointer overflow-hidden rounded-b-[5px] p-[40px] desktop-big:min-h-[623px]'>
      <div className='absolute inset-0 -z-10 bg-[var(--dark-blue)] transition group-hover:scale-105 group-hover:bg-main-blue'>
        <CaseBgItemsSvg />
      </div>
      <div className='z-10 flex h-full flex-col items-start justify-between transition duration-1000 group-hover:scale-[1.01]'>
        <div className='flex flex-col gap-[20px]'>
          <div className='flex gap-[10px]'>
            {data.tags.map((tag) => (
              <div
                key={tag}
                className='inline-flex items-center justify-center rounded-[5px] bg-[rgba(255,255,255,0.3)] p-[10px] backdrop-blur-[20px]'
              >
                <div className='self-stretch text-center font-proxima text-[16px] font-bold uppercase leading-[18px] text-white desktop-big:text-[21px]'>
                  #{tag}
                </div>
              </div>
            ))}
          </div>
          <div className='font-unbound text-[22px] font-bold uppercase leading-[1.1] text-white desktop-big:text-[38px]'>
            {data.title}
          </div>
        </div>

        <div className='flex flex-col items-start gap-2'>
          {data.industries.map((item) => (
            <div
              key={item}
              className='inline-flex items-start justify-start gap-2.5 rounded-sm bg-white p-2.5 font-unbound text-[16px] font-bold uppercase leading-7 text-slate-900 desktop-big:text-[24px]'
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
