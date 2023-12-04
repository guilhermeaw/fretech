const addTimezoneTo = (date: string) => `${date} GMT-3`;

export const formatDate = (date: string): string => {
  return date
    ? new Date(addTimezoneTo(date)).toLocaleDateString('pt-BR')
    : ' - ';
};

export const formatDateTime = (date: string): string => {
  return date ? new Date(addTimezoneTo(date)).toLocaleString('pt-BR') : ' - ';
};
