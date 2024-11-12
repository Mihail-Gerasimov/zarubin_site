import { DateTime } from 'luxon';

interface ITimezone {
  date?: DateTime;
  timezone?: string;
  locale?: string;
}

export const getTimeZone = (params?: ITimezone) => {
  const timezone = params?.timezone ?? 'Europe/Moscow';
  const locale = params?.locale ?? 'en-US';

  const date =
    params?.date ?? DateTime.now().setLocale(locale).setZone(timezone);

  return date.toFormat('HH:mm');
};
