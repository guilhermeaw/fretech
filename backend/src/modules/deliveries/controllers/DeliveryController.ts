import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateDeliveryService from '../services/CreateDeliveryService';

export default class DeliveryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      deliveryman_id,
      vehicle_id,
      start_date = null,
      end_date = null,
    } = request.body;

    const delivery = await new CreateDeliveryService().execute({
      user_id: Number(deliveryman_id),
      vehicle_id: Number(vehicle_id),
      start_date,
      end_date,
    });

    return response.json(instanceToPlain(delivery));
  }
}
