import LightMainLogo from '@/public/assets/images/icons/zarubin_logo.svg';

export const Footer = () => {
  return (
    <footer className='w-full px-[10px] py-[10px] bg-main-bg flex justify-between text-[14px] leading-[1.2] tablet:py-[22px] tablet:px-[40px] desktop:text-[18px] desktop:leading-[1.1] desktop:px-[80px] desktop:py-[65px]'>
      <div className='w-full tablet:flex-row tablet:items-center'>
        <ul className='flex flex-row items-center justify-between'>
          <li>
            <a
              href='https://stocks.soccer/'
              className='font-manrope text-[14px] tablet:text-[18px] desktop:text-[21px]'
            >
              Home
            </a>
          </li>
          <li>
            <a href='https://zarubin.co.uk/' target='_blank'>
              <LightMainLogo className='w-[auto] h-[24px] tablet:h-[36px] desktop:h-[50px]' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
