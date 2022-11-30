import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import Order from '../entities/Order';
import OrderRepository from '../repositories/OrderRepository';

export default class CreateOrderService {
  private orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  public async execute(orderToCreate: ICreateOrderDTO): Promise<Order> {
    return this.orderRepository.create(orderToCreate);
  }
}
