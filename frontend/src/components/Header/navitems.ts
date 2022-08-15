export type NavitemProp = {
  title: string;
  to: string;
};

export const navitems = [
  {
    title: 'Encomendas',
    to: '/encomendas',
  },
  {
    title: 'Entregadores',
    to: '/entregadores',
  },
  {
    title: 'Destinatários',
    to: '/destinatarios',
  },
  {
    title: 'Ocorrências',
    to: '/ocorrencias',
  },
  {
    title: 'Veículos',
    to: '/veiculos',
  },
] as NavitemProp[];
