import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateDeliveryService from '../services/CreateDeliveryService';
import ListDeliveriesService from '../services/ListDeliveriesService';

export default class DeliveryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      deliveryman_id,
      vehicle_id,
      orders_ids,
      start_date = null,
      end_date = null,
    } = request.body;

    const delivery = await new CreateDeliveryService().execute({
      user_id: Number(deliveryman_id),
      vehicle_id: Number(vehicle_id),
      orders_ids: orders_ids.map((order_id: string) => Number(order_id)),
      start_date,
      end_date,
    });

    return response.json(instanceToPlain(delivery));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const deliveries = await new ListDeliveriesService().execute();

    return response.json(instanceToPlain(deliveries));
  }
}
