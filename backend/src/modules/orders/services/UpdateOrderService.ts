import { IUpdateOrderDTO } from '../dtos/IUpdateOrderDTO';
import OrderRepository from '../repositories/OrderRepository';

export default class UpdateOrderService {
  private orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  public async execute(orderToUpdate: IUpdateOrderDTO): Promise<void> {
    await this.orderRepository.update(orderToUpdate);
  }
}
