import Link from 'next/link';
import LightMainLogo from '@/public/assets/images/icons/second_logo.svg';

export const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full py-[24px] bg-[#222222] flex justify-between text-[14px] leading-[1.2] desktop:text-[18px] desktop:leading-[1.1] items-center'>
      {/* <div className='mx-[auto] max-w-[896px] w-full flex justify-between'>
        <span className='text-red'>&#169; 2024</span>
        <Link
          href='https://zarubin.co.uk/policy_en'
          target='_blank'
          className=''
        >
          Policy Privacy
        </Link>
      </div> */}
      <div className='mx-[auto] w-[100%] max-w-[897px] flex flex-col items-start'>
        <ul className='flex flex-col space-y-4'>
          <li>
            <a href='https://stocks.soccer/'>Home</a>
          </li>
          <li>
            <a href='https://stocks.soccer/'>to Leagues</a>
          </li>
          <li>
            <a href='#'>
              <LightMainLogo className='w-[auto] h-[36px]' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
