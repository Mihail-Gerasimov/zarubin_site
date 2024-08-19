import LinkArrowIcon from '@/public/assets/images/icons/link_arrow.svg';
import solutionBg from '@/public/assets/images/main/hero-solutions-bg.webp';
import { DownloadLink } from '@/src/ui-kit/DownloadLink/DownloadLink';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className='px-[10px]'>
      <div
        className={`relative flex flex-col gap-[40px] py-[40px] desktop:flex-row desktop:justify-between desktop:py-[145px]`}
      >
        <div className='z-[5] flex flex-col gap-[12px] tablet:gap-[24px] desktop:gap-[30px] desktop:py-[px]'>
          <h1 className='desctop-hard:text-[100px] z-[5] font-unbound text-[28px] font-bold uppercase leading-[1.14] tablet:text-[60px] desktop:text-[80px] desktop:font-black desktop-hard:text-[100px]'>
            Business solutions and expertise
          </h1>
          <p className='z-[5] font-proxima text-[28px] font-bold leading-[1.14] text-[#D1D1D1] tablet:text-[36px]'>
            Digital business transformation
          </p>
          <Link
            href='/blog'
            className='button-hover z-[5] w-fit rounded-[6px] bg-[#7CFFCD] px-[32px] py-[13px] font-proxima text-[20px] font-bold leading-[1] text-text-dark '
          >
            Go to Insights
          </Link>
        </div>
        <div className='z-[5] flex flex-col gap-[21px] tablet:min-w-[539px]'>
          <div className='relative z-[5] overflow-hidden rounded-[5px] bg-gradient-to-br from-[#000A25] to-[#000A25]/60 bg-cover p-[20px]'>
            <h3 className='font-unbound text-[24px] font-bold uppercase leading-[1.16]'>
              Success Solutions
            </h3>
            <p className='mt-[12px] font-proxima text-[20px] leading-[1.2] opacity-80'>{`The stories of solving our client's cases`}</p>
            <Link
              href='/solutions'
              className='mt-[40px] flex h-[30px] w-fit items-center justify-center gap-[10px] rounded-[6px] bg-main-blue px-[10px] font-proxima text-[18px] font-bold leading-[1.33] hover:bg-main-blue-hover tablet:h-[50px]'
            >
              Go to solutions
              <LinkArrowIcon className='h-[18px] w-[18px]' />
            </Link>
            <Image
              src={solutionBg}
              fill
              alt='solution'
              className='absolute inset-0 z-[-1] w-full object-cover'
            />
          </div>
          <div className='z-[5] rounded-[5px] bg-white p-[20px]'>
            <div className='max-w-[500px]'>
              <h3 className='font-unbound text-[24px] font-bold uppercase leading-[1.16] text-text-dark tablet:text-[22px] tablet:leading-[1.1]'>
                Top 15 Best Practices for Improving Metrics in Sports
              </h3>
              <p className='mt-[12px] font-proxima text-[20px] leading-[1.2] text-text-dark desktop:mt-[19px]'>
                Implement it in order to increase metrics and change the
                attitude of the audience to the brand
              </p>
            </div>
            <div className='mt-[20px] flex flex-col gap-[25px] tablet:flex-row desktop:mt-[25px]'>
              <DownloadLink link='https://drive.google.com/file/d/1eXyUyvjlXv0i7gtawqK7D1jtEYGfC4nR/view' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
