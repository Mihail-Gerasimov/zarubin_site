import { DateTime } from 'luxon';

export const formattedDate = (date: string) => {
  const newDate = DateTime.fromFormat(date, 'dd-MM-yyyy');
  const formattedDate = newDate
    .setLocale('en-GB')
    .toLocaleString({
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .toLocaleLowerCase();
  return formattedDate;
};
