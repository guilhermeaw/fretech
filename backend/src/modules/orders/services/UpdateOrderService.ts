import { IUpdateOrderDTO } from '../dtos/IUpdateOrderDTO';
import Order from '../entities/Order';
import OrderRepository from '../repositories/OrderRepository';

export default class UpdateOrderService {
  private orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  public async execute(orderToUpdate: IUpdateOrderDTO): Promise<Order> {
    return this.orderRepository.update(orderToUpdate);
  }
}
