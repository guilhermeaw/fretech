import { rest } from 'msw';

import { basePath } from './constants';
import { Vehicle, VehicleStatus } from '../../models/Vehicle';

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

export const vehiclesHandlers = [
  rest.get(`${basePath}/vehicles`, (req, res, ctx) => {
    return res(ctx.json(vehicles));
  }),

  rest.get(`${basePath}/vehicles/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.json(vehicles.find(vehicle => vehicle.id === Number(id))));
  }),

  rest.post(`${basePath}/vehicles`, async (req, res, ctx) => {
    const { plate, model, capacity } = await req.json();

    return res(
      ctx.json({
        id: Math.floor(Math.random() * (10 - 4 + 1) + 4),
        capacity,
        model,
        plate,
        status: VehicleStatus.AVAILABLE,
      }),
    );
  }),

  rest.put(`${basePath}/vehicles/:id`, async (req, res, ctx) => {
    const { model, plate, capacity } = await req.json();
    const { id } = req.params;

    const vehicleId = Number(id);

    return res(
      ctx.json({
        id: vehicleId,
        model,
        plate,
        capacity,
        status: vehicles.find(vehicle => vehicle.id === vehicleId)?.status,
      }),
    );
  }),

  rest.delete(`${basePath}/vehicles/:id`, async (req, res, ctx) => {
    const { id } = req.params;

    const vehicleId = Number(id);

    return res(
      ctx.json({
        id: vehicleId,
      }),
    );
  }),
];
