import Order from '../entities/Order';
import OrderRepository from '../repositories/OrderRepository';

export default class FindOrderService {
  private ordersRepository: OrderRepository;

  constructor() {
    this.ordersRepository = new OrderRepository();
  }

  public async execute(id: number): Promise<Order | null> {
    return this.ordersRepository.findById(id);
  }
}
