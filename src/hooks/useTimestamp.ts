import moment from 'moment';
import 'moment/locale/pt-br';

export function useTimestamp(timestamp: number) {
  moment.locale('pt-br');
  const date = moment(timestamp);

  function checkZeroOnLeft(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return String(value);
  }

  const day = checkZeroOnLeft(date.date());
  const stringMonth = date.format('MMMM');
  const month = checkZeroOnLeft(date.month() + 1);
  const year = checkZeroOnLeft(date.year());
  const hour = checkZeroOnLeft(date.hour());
  const minute = checkZeroOnLeft(date.minute());

  return {
    day,
    stringMonth,
    month,
    year,
    hour,
    minute,
  };
}
