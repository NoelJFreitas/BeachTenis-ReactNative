import moment from 'moment';
import 'moment/locale/pt-br';

export function useTimestamp(timestamp: number) {
  moment.locale('pt-br');
  const date = moment(timestamp);

  return {
    day: date.date(),
    stringMonth: date.format('MMMM'),
    year: date.year(),
    hour: date.hour(),
    minute: date.minute(),
  };
}
