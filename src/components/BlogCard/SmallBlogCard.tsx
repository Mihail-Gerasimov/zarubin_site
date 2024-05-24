interface Props {
  tag: string;
  title: string;
  description: string;
  date: string;
}

export const SmallBlogCard = ({ tag, title, description, date }: Props) => {
  return (
    <div className='px-[40px] py-[40px] flex flex-col items-start gap-[24px] bg-main-beige rounded-[12px]'>
      <span className='px-[10px] py-[10px] text-[20px] leading-[1.2] bg-white rounded-[2px]'>
        {tag}
      </span>
      <h2 className='text-[22px] text-text-dark leading-[1] font-bold'>
        {title}
      </h2>
      <p className='text-[22px] text-text-dark leading-[1.2] opacity-[70%]'>
        {description}
      </p>
      <span className='text-[16px] text-text-gray leading-[1.25] opacity-[50%]'>
        {date}
      </span>
    </div>
  );
};
