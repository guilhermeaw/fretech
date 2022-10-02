// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { basePath } from './constants';
import { Deliveryman } from '../../models/Deliveryman';

const deliverymans = [
  {
    id: 1,
    name: 'João da Silva',
    email: 'joao@gmail.com',
    phone: '51999999999',
  },
  {
    id: 2,
    name: 'Maria da Silva',
    email: 'maria@gmail.com',
    phone: '51999999999',
  },
  {
    id: 3,
    name: 'Alfredo Costa',
    email: 'alfredo@gmail.com',
    phone: '51999999999',
  },
] as Deliveryman[];

export const deliverymansHandlers = [
  rest.get(`${basePath}/deliverymans`, (req, res, ctx) => {
    return res(ctx.json(deliverymans));
  }),

  rest.get(`${basePath}/deliverymans/:id`, (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.json(deliverymans.find(deliveryman => deliveryman.id === Number(id))),
    );
  }),

  rest.post(`${basePath}/deliverymans`, async (req, res, ctx) => {
    const { name, email, phone } = await req.json();

    return res(
      ctx.json({
        id: Math.floor(Math.random() * (10 - 4 + 1) + 4),
        name,
        email,
        phone,
      }),
    );
  }),

  rest.put(`${basePath}/deliverymans/:id`, async (req, res, ctx) => {
    const { name, email, phone } = await req.json();
    const { id } = req.params;

    const deliverymanId = Number(id);

    return res(
      ctx.json({
        id: deliverymanId,
        name,
        email,
        phone,
      }),
    );
  }),
];
