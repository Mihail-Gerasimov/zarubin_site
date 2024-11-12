import { DateTime } from 'luxon';

interface IDay {
  date: DateTime;
  onClick: () => void;
  className?: string;
}

export const CalendarDayComponent = ({
  date,
  onClick,
  className = '',
}: IDay) => {
  return (
    <span
      onClick={onClick}
      className={`mx-[auto] flex h-[33px] w-[33px] cursor-pointer items-center justify-center rounded-[5px] p-[5px] duration-300 ${className}`}
    >
      {date.day}
    </span>
  );
};
