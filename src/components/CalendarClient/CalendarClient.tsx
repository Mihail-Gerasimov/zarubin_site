import calendarImage from '@/public/assets/images/brief/calendar.webp';
import { DateTime } from 'luxon';
import Image from 'next/image';
import { CalendarContent } from './CalendarContent';

interface ICalendarProps {
  onClick: (name: string, value: DateTime) => void;
}

export const CalendarClient = ({ onClick }: ICalendarProps) => {
  return (
    <div className='flex flex-col items-center gap-[40px] laptop-big:flex-row-reverse laptop-big:items-start laptop-big:justify-center'>
      <CalendarContent />
      <Image
        src={calendarImage}
        width={390}
        height={440}
        alt='calendar'
        className='h-[auto] w-full max-w-[390px]'
      />
    </div>
  );
};
