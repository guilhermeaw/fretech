import OrderRepository from '../../orders/repositories/OrderRepository';
import { ICreateDeliveryDTO } from '../dtos/ICreateDeliveryDTO';
import Delivery from '../entities/Delivery';
import DeliveryRepository from '../repositories/DeliveryRepository';

export default class CreateDeliveryService {
  private deliveryRepository: DeliveryRepository;

  private ordersRepository: OrderRepository;

  constructor() {
    this.deliveryRepository = new DeliveryRepository();
    this.ordersRepository = new OrderRepository();
  }

  public async execute({
    user_id,
    vehicle_id,
    orders_ids,
    start_date,
    end_date,
  }: ICreateDeliveryDTO): Promise<Delivery> {
    const orders = await this.ordersRepository.listByIds(orders_ids);

    const delivery = await this.deliveryRepository.create({
      user_id,
      vehicle_id,
      orders,
      start_date,
      end_date,
    });

    return delivery;
  }
}
