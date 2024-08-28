import { Case } from '@/src/utils/getCaseMetadata';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Cases.module.css';

export const CasesGrid = ({ cases }: { cases: Case[] }) => {
  return (
    <div className='grid grid-cols-1 gap-[40px] tablet:grid-cols-2 desktop:grid-cols-3'>
      {cases.map((item) => (
        <CaseCard key={item.title} data={item} />
      ))}
    </div>
  );
};

const CaseCard = ({ data }: { data: Case }) => {
  return (
    <Link
      href={`/solutions/${data.slug}`}
      className={styles.mainContainer}
      style={{
        backgroundImage: `url(${data.bannerImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        className={`${styles.contentContainer} relative z-30 flex h-full w-full flex-col justify-between`}
      >
        <div className='flex flex-col gap-[19px]'>
          <div className='flex items-center justify-between'>
            <div className='h-[35px] w-[auto]'>
              <Image
                src={data.logo}
                alt={`${data.tag} logo`}
                height={35}
                width={120}
                className='h-full w-[auto]'
              />
            </div>
            <span
              className={`${styles.tag} inline-flex items-center justify-center self-stretch rounded-[5px] p-[10px] text-center font-proxima text-[16px] font-bold uppercase leading-[18px] text-white backdrop-blur-[20px] desktop-big:text-[21px]`}
            >
              {data.tag}
            </span>
          </div>
          <h2 className='font-unbound text-[22px] font-bold uppercase leading-[1.15] text-white desktop-big:text-[38px]'>
            {data.title}
          </h2>
        </div>
        <div className='flex flex-col gap-[8px]'>
          {data.industries.map((item, idx) => (
            <span
              key={idx}
              className='w-fit rounded-sm bg-white p-2.5 font-unbound text-[16px] font-bold uppercase leading-7 text-slate-900 desktop-big:text-[24px]'
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
