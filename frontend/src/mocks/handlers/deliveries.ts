// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { basePath } from './constants';
import { User } from '../../models/User';
import { Order } from '../../models/Order';
import { Vehicle } from '../../models/Vehicle';
import { Delivery } from '../../models/Delivery';

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
] as User[];

const vehicles = [
  {
    id: 1,
    model: 'Renault Master',
    plate: 'ABC-1234',
    capacity: 10,
    status: 'IN_USE',
  },
  {
    id: 2,
    model: 'Mercedes-Benz Sprinter',
    plate: 'DEF-5678',
    capacity: 13,
    status: 'AVAILABLE',
  },
  {
    id: 3,
    model: 'Volkswagen Constellation',
    plate: 'GHI-9012',
    capacity: 16,
    status: 'AVAILABLE',
  },
] as Vehicle[];

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
    start_date: null,
    end_date: null,
    vehicle: vehicles[0],
    deliveryman: deliverymans[0],
    orders,
  },
  {
    id: 2,
    start_date: '2022-11-10T10:00:00',
    end_date: '2022-11-10T18:00:00',
    vehicle: vehicles[1],
    deliveryman: deliverymans[1],
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

  rest.post(`${basePath}/deliveries`, async (req, res, ctx) => {
    const { vehicle_id, orders_ids, deliveryman_id } = await req.json();

    return res(
      ctx.json({
        id: Math.floor(Math.random() * (10 - 4 + 1) + 4),
        start_date: null,
        end_date: null,
        vehicle: vehicles.find(vehicle => vehicle.id === vehicle_id),
        orders: orders.filter(order => orders_ids.includes(order.id)),
        deliveryman: deliverymans.find(
          deliveryman => deliveryman.id === deliveryman_id,
        ),
      }),
    );
  }),

  rest.put(`${basePath}/deliveries/:id`, async (req, res, ctx) => {
    const { vehicle_id, deliveryman_id, orders_ids, start_date, end_date } =
      await req.json();

    const { id } = req.params;
    const deliveryId = Number(id);

    return res(
      ctx.json({
        id: deliveryId,
        start_date,
        end_date,
        vehicle: vehicles.find(vehicle => vehicle.id === vehicle_id),
        orders: orders.filter(order => orders_ids.includes(order.id)),
        deliveryman: deliverymans.find(
          deliveryman => deliveryman.id === deliveryman_id,
        ),
      }),
    );
  }),

  rest.delete(`${basePath}/deliveries/:id`, async (req, res, ctx) => {
    const { id } = req.params;

    const deliveryId = Number(id);

    return res(
      ctx.json({
        id: deliveryId,
      }),
    );
  }),
];
