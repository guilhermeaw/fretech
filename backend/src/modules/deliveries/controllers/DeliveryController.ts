import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateDeliveryService from '../services/CreateDeliveryService';
import DeleteDeliveryService from '../services/DeleteDeliveryService';
import FindDeliveryService from '../services/FindDeliveryService';
import ListDeliveriesService from '../services/ListDeliveriesService';
import UpdateDeliveryService from '../services/UpdateDeliveryService';

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

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      deliveryman_id,
      vehicle_id,
      orders_ids,
      start_date = null,
      end_date = null,
    } = request.body;

    const { id } = request.params;
    const idAsNumber = Number(id);

    const delivery = await new UpdateDeliveryService().execute({
      user_id: Number(deliveryman_id),
      vehicle_id: Number(vehicle_id),
      orders_ids: orders_ids.map((order_id: string) => Number(order_id)),
      start_date,
      end_date,
      id: idAsNumber,
    });

    return response.json(instanceToPlain(delivery));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    await new DeleteDeliveryService().execute(idAsNumber);
    return response.json({ id: idAsNumber });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const deliveries = await new ListDeliveriesService().execute();

    return response.json(instanceToPlain(deliveries));
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    const delivery = await new FindDeliveryService().execute(idAsNumber);

    return response.json(instanceToPlain(delivery));
  }
}
