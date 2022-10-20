import { rest } from 'msw';
import { Occurrence } from '../../models/Occurrence';
import { basePath } from './constants';

const occurrences = [
  {
    id: 1,
    order_id: 1,
    name: 'Atraso na entrega',
    description:
      'A entrega foi feita com 2 horas de atraso, pois o pneu do caminhão furou',
    created_at: '2022-10-01T00:19:00.000Z',
  },
  {
    id: 2,
    order_id: 2,
    name: 'Perda de mercadoria',
    description:
      'A mercadoria foi perdida durante o transporte, pois o caminhão foi roubado',
    created_at: '2022-10-03T00:12:30.000Z',
  },
  {
    id: 3,
    order_id: 3,
    name: 'Mercadoria danificada',
    description:
      'A mercadoria foi danificada durante o transporte, pois o caminhão tombou',
    created_at: '2022-10-11T00:11:00.000Z',
  },
] as Occurrence[];

export const occurrencesHandlers = [
  rest.get(`${basePath}/occurrences`, (req, res, ctx) => {
    return res(ctx.json(occurrences));
  }),
];