import { formattedDate } from '@/src/utils/formattedDate';

interface Props {
  tag: string;
  title: string;
  description: string;
  date: string;
}

export const SmallBlogCard = ({ tag, title, description, date }: Props) => {
  const formatDate = formattedDate(date);

  return (
    <div className='flex flex-col items-start gap-[24px] rounded-[12px] bg-main-beige px-[40px] py-[40px]'>
      <span className='rounded-[2px] bg-white px-[10px]  py-[10px] font-proxima text-[20px] leading-[1.2]'>
        {tag}
      </span>
      <h2 className='line-clamp-3 font-proxima text-[22px] font-bold leading-[1.1] text-text-dark tablet:text-[26px] desktop:text-[36px]'>
        {title}
      </h2>
      <p className='line-clamp-2 overflow-hidden font-proxima text-[20px] leading-[1.2] text-text-dark opacity-[70%] tablet:line-clamp-3'>
        {description}
      </p>
      <span className='font-proxima text-[16px] leading-[1.25] text-text-dark opacity-[50%]'>
        {formatDate}
      </span>
    </div>
  );
};
