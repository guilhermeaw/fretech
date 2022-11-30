import Order from '../entities/Order';
import OrderRepository from '../repositories/OrderRepository';

export default class ListOrdersService {
  private ordersRepository: OrderRepository;

  constructor() {
    this.ordersRepository = new OrderRepository();
  }

  public async execute(): Promise<Order[]> {
    return this.ordersRepository.list();
  }
}
