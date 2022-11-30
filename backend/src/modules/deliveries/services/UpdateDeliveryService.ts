import AppError from '@shared/errors/AppError';
import OrderRepository from 'modules/orders/repositories/OrderRepository';
import { IUpdateDeliveryDTO } from '../dtos/IUpdateDeliveryDTO';
import Delivery from '../entities/Delivery';
import DeliveryRepository from '../repositories/DeliveryRepository';

export default class UpdateDeliveryService {
  private deliveryRepository: DeliveryRepository;

  private ordersRepository: OrderRepository;

  constructor() {
    this.deliveryRepository = new DeliveryRepository();
    this.ordersRepository = new OrderRepository();
  }

  public async execute(delivery: IUpdateDeliveryDTO): Promise<Delivery> {
    const deliveryExists = await this.deliveryRepository.findById(delivery.id);

    if (!deliveryExists) {
      throw new AppError('Entrega não encontrada');
    }

    const orders = await this.ordersRepository.listByIds(delivery.orders_ids);

    return this.deliveryRepository.update({ ...delivery, orders });
  }
}
