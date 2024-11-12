import { DateTime } from 'luxon';

interface IWeeks {
  locale?: string;
}

export const createWeeks = (params?: IWeeks) => {
  const locale = params?.locale ?? 'en-US';

  const daysofWeek = Array.from({ length: 7 }, (_, i) =>
    DateTime.fromObject({
      weekday: (i === 0 ? 7 : i) as 1 | 2 | 3 | 4 | 5 | 6 | 7,
    })
      .setLocale(locale)
      .toFormat('ccc'),
  );

  return daysofWeek;
};
