// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { basePath } from './constants';
import { Order } from '../../models/Order';
import { Delivery } from '../../models/Delivery';

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

const deliveries = [
  {
    id: 1,
    start_date: '2022-11-10T10:00:00',
    end_date: '2022-11-10T18:00:00',
    vehicle: {
      id: 1,
      model: 'Renault Master',
      plate: 'ABC-1234',
      capacity: 10,
      status: 'IN_USE',
    },
    deliveryman: {
      id: 1,
      name: 'João da Silva',
      email: 'joao@gmail.com',
      phone: '51999999999',
    },
    orders,
  },
  {
    id: 2,
    start_date: '2022-11-10T10:00:00',
    end_date: '2022-11-10T18:00:00',
    vehicle: {
      id: 2,
      model: 'Mercedes-Benz Sprinter',
      plate: 'DEF-5678',
      capacity: 13,
      status: 'AVAILABLE',
    },
    deliveryman: {
      id: 3,
      name: 'Alfredo Costa',
      email: 'alfredo@gmail.com',
      phone: '51999999999',
    },
    orders: [orders[0]],
  },
] as Delivery[];

export const deliveriesHandlers = [
  rest.get(`${basePath}/deliveries`, (req, res, ctx) => {
    return res(ctx.json(deliveries));
  }),

  rest.get(`${basePath}/deliveries/:id`, (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.json(deliveries.find(delivery => delivery.id === Number(id))),
    );
  }),
];
