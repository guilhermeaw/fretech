export type NavitemProp = {
  title: string;
  to: string;
};

export const navitems = [
  // {
  //   title: 'Entregas',
  //   to: '/entregas',
  // },
  {
    title: 'Entregadores',
    to: '/entregadores',
  },
  {
    title: 'Pedidos',
    to: '/pedidos',
  },
  // {
  //   title: 'Ocorrências',
  //   to: '/ocorrencias',
  // },
  // {
  //   title: 'Veículos',
  //   to: '/veiculos',
  // },
] as NavitemProp[];
