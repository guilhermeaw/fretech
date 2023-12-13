import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import EmailController from '@shared/email/controllers/EmailController';
import CreateOrderService from '../services/CreateOrderService';
import DeleteOrderService from '../services/DeleteOrderService';
import FindOrderService from '../services/FindOrderService';
import ListOrdersService from '../services/ListOrdersService';
import UpdateOrderService from '../services/UpdateOrderService';
import ListOrdersByDeliverymanService from '../services/ListOrdersByDeliverymanService';

export default class OrderController {
  private emailController: EmailController;

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

  public async update(request: Request, response: Response): Promise<Response> {
    console.log('request.body');
    console.log(request.body);
    const { address, status, entry_date, exit_date, receiver } = request.body;

    const { id } = request.params;
    const idAsNumber = Number(id);

    const order = await new UpdateOrderService().execute({
      ...address,
      id: idAsNumber,
      status,
      entry_date,
      exit_date,
      name_receiver: receiver.name,
      cpf_receiver: receiver.cpf,
      phone_receiver: receiver.phone,
    });

    if (status === 'IN_PROGRESS') {
      try {
        this.emailController = new EmailController();
        await this.emailController.sendEmail(
          'lucaspereiravargas@gmail.com',
          'Seu pedido está a caminho!',
          `Seu pedido de ID ${order.id} está em andamento. O produto saiu para entrega.`,
        );
      } catch (error) {
        throw new Error('Erro ao enviar e-mail: ' + error);
      }
    }

    return response.json(instanceToPlain(order));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    await new DeleteOrderService().execute(idAsNumber);
    return response.json({ id: idAsNumber });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const orders = await new ListOrdersService().execute();

    return response.json(instanceToPlain(orders));
  }

  // public async listByDeliveryman(
  //   request: Request,
  //   response: Response,
  // ): Promise<Response> {
  //   const { deliverymanId } = request.params;
  //   const deliverymanIdAsNumber = Number(deliverymanId);

  //   const orders = await new ListOrdersByDeliverymanService().execute(
  //     deliverymanIdAsNumber,
  //   );

  //   return response.json(instanceToPlain(orders));
  // }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    const order = await new FindOrderService().execute(idAsNumber);

    return response.json(instanceToPlain(order));
  }
}
