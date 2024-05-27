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
    <div className='px-[40px] py-[40px] flex flex-col items-start gap-[24px] bg-main-beige rounded-[12px]'>
      <span className='px-[10px] py-[10px] text-[20px] leading-[1.2] bg-white rounded-[2px]'>
        {tag}
      </span>
      <h2 className='text-[22px] text-text-dark leading-[1] font-bold tablet:text-[26px] desktop:text-[36px]'>
        {title}
      </h2>
      <p className='text-[20px] text-text-dark overflow-hidden line-clamp-2 leading-[1.2] opacity-[70%] tablet:line-clamp-3'>
        {description}
      </p>
      <span className='text-[16px] text-text-dark leading-[1.25] opacity-[50%]'>
        {formatDate}
      </span>
    </div>
  );
};
