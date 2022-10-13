// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { basePath } from './constants';
import { Order } from '../../models/Order';

const orders = [
  {
    id: 1,
    address: {
      street: 'Rua das Flores',
      number: 123,
      complement: 'Apto 101',
      cep: '99999-999',
      city: 'Porto Alegre',
      state: 'RS',
    },
    receiver: {
      name: 'João da Silva',
      cpf: '999.999.999-99',
      phone: '51999999999',
    },
    status: 'PENDING',
    signature_url: '',
  },
  {
    id: 2,
    address: {
      street: 'Rua das Flores',
      number: 123,
      complement: 'Apto 101',
      cep: '99999-999',
      city: 'Lajeado',
      state: 'RS',
    },
    receiver: {
      name: 'Fernando Gutierres',
      cpf: '999.999.999-99',
      phone: '51999999999',
    },
    status: 'CANCELED',
    signature_url: '',
  },
  {
    id: 3,
    address: {
      street: 'Rua das Flores',
      number: 123,
      complement: 'Apto 101',
      cep: '99999-999',
      city: 'Estrela',
      state: 'RS',
    },
    receiver: {
      name: 'Luana Silva',
      cpf: '999.999.999-99',
      phone: '51999999999',
    },
    status: 'DELIVERED',
    signature_url: '',
  },
] as Order[];

export const ordersHandlers = [
  rest.get(`${basePath}/orders`, (req, res, ctx) => {
    return res(ctx.json(orders));
  }),

  rest.get(`${basePath}/orders/:id`, (req, res, ctx) => {
    const { id } = req.params;

    return res(ctx.json(orders.find(order => order.id === Number(id))));
  }),

  rest.post(`${basePath}/orders`, async (req, res, ctx) => {
    const { address, receiver, status } = await req.json();

    return res(
      ctx.json({
        id: Math.floor(Math.random() * (10 - 4 + 1) + 4),
        address,
        receiver,
        status,
        signature_url: null,
      }),
    );
  }),

  rest.put(`${basePath}/orders/:id`, async (req, res, ctx) => {
    const { address, receiver, status, signature_url } = await req.json();
    const { id } = req.params;

    const orderId = Number(id);

    return res(
      ctx.json({
        id: orderId,
        address,
        receiver,
        status,
        signature_url,
      }),
    );
  }),
];
