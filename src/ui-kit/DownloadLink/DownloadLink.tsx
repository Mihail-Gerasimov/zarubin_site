import DownloadIcon from '@/public/assets/images/icons/download.svg';
import Link from 'next/link';

interface Props {
  link: string;
}

export const DownloadLink = ({ link }: Props) => {
  return (
    <Link
      href={link}
      download
      target='_blank'
      className='mb-[12px] mt-[12px] flex w-[262px] items-start gap-[12px] rounded-[5px] bg-main-bg  p-[10px] tablet:mb-0 tablet:mt-[20px] tablet:w-[263px]'
    >
      <DownloadIcon className='h-[auto] w-[20px]' />
      <div className='flex flex-col gap-[4px] text-white'>
        <span className='font-proxima text-[12px] font-bold leading-[1.33] tablet:text-[20px] tablet:leading-[1]'>
          Download the research
        </span>
        <span className='font-proxima text-[12px] leading-[1.16]'>
          Downloaded 152 times already
        </span>
      </div>
    </Link>
  );
};
