import LightMainLogo from '@/public/assets/images/icons/second_logo.svg';

export const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full py-[24px] bg-[#222222] flex justify-between text-[14px] leading-[1.2] desktop:text-[18px] desktop:leading-[1.1] items-center'>
      <div className='mx-[auto] w-[100%] max-w-[897px] flex flex-rows justify-between items-center'>
        <ul className='flex flex-col space-y-4'>
          <li>
            <a href='https://stocks.soccer/'>Home</a>
          </li>
          <li>
            <a href='https://stocks.soccer/'>to Leagues</a>
          </li>
        </ul>
        <div className='flex items-center justify-center'>
          <a href='#' className='flex items-center gap-[12px]'>
            powered by @
            <LightMainLogo className='w-[auto] h-[36px]' />
          </a>
        </div>
      </div>
    </footer>
  );
};
