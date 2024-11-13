import Arrow from '@/public/assets/images/icons/arrow.svg';
import { useState } from 'react';

export const TimeSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative inline-block'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-[4px] border-0 text-[16px] text-text-dark/60 outline-none'
      >
        Select time{' '}
        <Arrow
          className={`h-[auto] w-[26px] fill-main-blue ${isOpen ? 'rotate-[90deg]' : ''} duration-300`}
        />
      </button>
      <ul
        className={`scrollbar-thin absolute left-0 top-[100%] z-[10] flex max-h-0 min-w-full flex-col items-center gap-[20px] overflow-y-auto rounded-[8px] bg-white p-[8px_0] transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'h-h-full max-h-[150px] opacity-100' : 'opacity-0'}`}
        style={{ boxShadow: '0px 11.11px 44.46px 0px rgba(12, 16, 24, 0.12)' }}
      >
        <li className='text-[16px] text-text-dark/60'>
          <span>14:00</span>
        </li>
        <li className='text-[16px] text-text-dark/60'>
          <span>15:00</span>
        </li>
        <li className='text-[16px] text-text-dark/60'>
          <span>16:00</span>
        </li>
        <li className='text-[16px] text-text-dark/60'>
          <span>17:00</span>
        </li>
        <li className='text-[16px] text-text-dark/60'>
          <span>18:00</span>
        </li>
      </ul>
    </div>
  );
};
