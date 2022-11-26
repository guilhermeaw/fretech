export const formatDate = (date: string): string => {
  return date ? new Date(date).toLocaleDateString('pt-BR') : ' - ';
};

export const formatDateTime = (date: string): string => {
  return date ? new Date(date).toLocaleString('pt-BR') : ' - ';
};
