// import { DateTime } from 'luxon';
import { DateTime } from 'luxon';
import { createNewDate } from './createNewDate';
import { createWeeks } from './createWeeks';
import { useEffect, useState } from 'react';
import { getDays } from './getDays';
import CalendarArrow from '@/public/assets/images/icons/calendar-arrow.svg';
import Watches from '@/public/assets/images/icons/watches.svg';
import { CalendarDayComponent } from './CalendarDayComponent';
import { getTimeZone } from './getTimeZone';
import { TimeSelect } from './TimeSelect';

interface ICalendarProps {
  onClick: (name: string, value: DateTime) => void;
}

export const Calendar = ({ onClick }: ICalendarProps) => {
  const locale = 'en-US';
  const currentDate = DateTime.now().setLocale(locale);
  const currentYear = currentDate.year;

  const [currentMonth, setCurrentMonth] = useState(currentDate.month);
  const [selectedDay, setSelectedDay] = useState<DateTime | null>(null);
  const timezone = getTimeZone({ date: currentDate });

  const date = createNewDate({
    date: DateTime.fromObject({
      year: currentYear,
      month: currentMonth,
    }),
    locale,
  });

  const weeks = createWeeks();

  const startDate = getDays({
    startWeek: date.startWeek,
    endWeek: date.endWeek,
  });

  const handleNextMonth = () => {
    setCurrentMonth(
      (prevMonth) =>
        DateTime.now().set({ month: prevMonth }).plus({ months: 1 }).month,
    );
  };
  const handlePrevMonth = () => {
    if (currentMonth === currentDate.month) return;
    setCurrentMonth(
      (prevMonth) =>
        DateTime.now().set({ month: prevMonth }).minus({ months: 1 }).month,
    );
  };

  const handleSelectedDay = (date: DateTime) => {
    if (date.month !== currentMonth || date.day < currentDate.day) return;
    setSelectedDay(date);
    onClick('date', date);
  };

  useEffect(() => {
    console.log(selectedDay);
  }, [selectedDay]);

  return (
    <div
      className='flex w-full max-w-[390px] flex-col rounded-[16px] p-[27px] font-proxima'
      style={{ boxShadow: '0px 11.11px 44.46px 0px rgba(12, 16, 24, 0.12)' }}
    >
      <div className='flex items-center justify-between'>
        <button
          type='button'
          onClick={handlePrevMonth}
          className='flex rotate-[180deg] items-center justify-center px-[8px] py-[6px]'
        >
          <CalendarArrow className='h-[15px] w-[auto]' />
        </button>
        <p className='text-[22px] text-[#525760]'>{date.monthName}</p>
        <button
          type='button'
          onClick={handleNextMonth}
          className='flex items-center justify-center px-[8px] py-[6px]'
        >
          <CalendarArrow className='h-[15px] w-[auto]' />
        </button>
      </div>

      <div className='mt-[12px] grid grid-cols-7 gap-[10px] py-[20px] text-[16px]'>
        {weeks.map((item) => (
          <span
            key={item}
            className='flex items-center justify-center px-[5px] first:text-red-500 last:text-red-500'
          >
            {item}
          </span>
        ))}
      </div>

      <div className='mt-[11px] grid grid-cols-7 gap-[10px] text-[18px]'>
        {startDate.length !== 0 &&
          startDate.map((item, idx) => (
            <CalendarDayComponent
              key={idx}
              date={item}
              onClick={() => handleSelectedDay(item)}
              className={`${item.day === currentDate.day && item.month === currentDate.month ? 'text-main-blue-hover' : item.month === currentMonth ? 'text-text-dark' : 'text-gray-400'} ${item.day === selectedDay?.day && item.month === currentMonth ? 'bg-main-blue-hover text-white' : ''}`}
            />
          ))}
      </div>

      <div className='mt-[20px] flex items-end justify-between'>
        <div>
          <span className='text-[16px] font-bold text-text-dark'>
            Time zone
          </span>
          <p className='mt-[8px] flex items-center gap-[6px] text-[16px] text-main-blue'>
            <Watches className='h-[auto] w-[20px]' />
            Moscow Time {`(${timezone})`}
          </p>
        </div>
        <TimeSelect />
      </div>
    </div>
  );
};
