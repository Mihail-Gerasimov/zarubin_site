import { DateTime } from 'luxon';

interface IProps {
  startWeek: DateTime;
  endWeek: DateTime;
}

export const getDays = ({ startWeek, endWeek }: IProps) => {
  let startDate = startWeek;
  const calendar = [];

  while (startDate <= endWeek) {
    calendar.push(startDate);
    startDate = startDate.plus({ days: 1 });
  }

  return calendar;
};
