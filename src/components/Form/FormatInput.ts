export type InputFormat = 'contact' | 'document' | 'date' | 'cardDate';

export const formatWith: Record<InputFormat, (t: string) => string> = {
  contact: t => {
    return t.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  },
  document: t => {
    return t.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  },
  date: t => {
    return t.replace(/^(\d{2})(\d{2})(\d{4})$/, '$1/$2/$3');
  },
  cardDate: t => {
    return t.replace(/^(\d{2})(\d{2})$/, '$1/$2');
  },
};
