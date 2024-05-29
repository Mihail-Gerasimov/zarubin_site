import Image from 'next/image';

interface Props {
  image: string;
  name: string;
  date: string;
}

export const AuthorInfo = ({ image, name, date }: Props) => {
  return (
    <div className='flex items-center gap-[12px] tablet:gap-[20px]'>
      <Image
        src={image}
        width={49}
        height={49}
        alt={name}
        className='w-[49px] tablet:w-[80px] tablet:h-[80px] rounded-full'
      />
      <div className='w-full flex flex-col '>
        <span className='font-proxima font-bold text-[18px] text-text-dark leading-[1.33] tablet:min-w-[309px] tablet:max-w-[309px]'>
          Written by {name}
        </span>
        <span className='font-proxima text-[18px] text-text-dark leading-[1.33]'>
          {date}
        </span>
      </div>
    </div>
  );
};
