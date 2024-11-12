import { DateTime } from 'luxon';

interface ICalendarDate {
  locale?: string;
  date: DateTime;
}

export const createNewDate = (params?: ICalendarDate) => {
  const locale = params?.locale ?? 'en-US';
  const date =
    params?.date.setLocale(locale) ?? DateTime.now().setLocale(locale);

  const year = date.year;
  const monthNumber = date.month;
  const monthName = date.monthLong;
  const monthShort = date.monthShort;
  const startMonth = date.startOf('month');
  const endMonth = date.endOf('month').endOf('week');

  const startWeek = startMonth
    .startOf('week')
    .setLocale(locale)
    .minus({ days: 1 });
  const endWeek = endMonth.endOf('week').setLocale(locale).minus({ days: 1 });
  const weekDay = date.weekday;
  const weekDayName = date.toLocaleString({ weekday: 'short' });
  const day = date.day;

  const endWeekNumber = endWeek.weekNumber;

  return {
    date,
    year,
    monthNumber,
    monthName,
    monthShort,
    startMonth,
    endMonth,
    startWeek,
    endWeek,
    weekDay,
    weekDayName,
    endWeekNumber,
    day,
  };
};
