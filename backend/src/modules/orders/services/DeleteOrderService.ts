import OrderRepository from '../repositories/OrderRepository';

export default class DeleteOrderService {
  private orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  public async execute(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
