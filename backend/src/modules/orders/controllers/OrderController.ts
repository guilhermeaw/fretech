import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateOrderService from '../services/CreateOrderService';

export default class OrderController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { address, status, entry_date, exit_date, receiver } = request.body;

    const order = await new CreateOrderService().execute({
      ...address,
      status,
      entry_date,
      exit_date,
      name_receiver: receiver.name,
      cpf_receiver: receiver.cpf,
      phone_receiver: receiver.phone,
    });

    return response.json(instanceToPlain(order));
  }
}
