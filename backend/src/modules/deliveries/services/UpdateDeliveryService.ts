import AppError from '@shared/errors/AppError';
import Delivery from '../entities/Delivery';
import DeliveryRepository from '../repositories/DeliveryRepository';
import OrderRepository from 'modules/orders/repositories/OrderRepository';

export default class UpdateDeliveryService {
  private deliveryRepository: DeliveryRepository;
  
  private ordersRepository: OrderRepository;

  constructor() {
    this.deliveryRepository = new DeliveryRepository();
  }

  public async execute({
    id,
    user_id,
    vehicle_id,
    orders_ids,
    start_date,
    end_date,
  }: Delivery): Promise<void> {
    const orders = await this.ordersRepository.listByIds(orders_ids);

    const deliveryExists = await this.deliveryRepository.findById(id);

    await this.deliveryRepository.update({
      id,
      deliveryData: {
        user_id,
        vehicle_id,
        orders,
        start_date,
        end_date,
      }
    });
  }
}
