import AppError from '@shared/errors/AppError';

import Order from '../entities/Order';
import OrderRepository from '../repositories/OrderRepository';

export default class CreateOrderService {
  private orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  public async execute({ 
    cep, 
    state, 
    city, 
    number, 
    street, 
    status, 
    entry_date, 
    exit_date, 
    name_receiver, 
    cpf_receiver }: Order): Promise<Order> {
    const order = await this.orderRepository.create({
      cep, 
      state, 
      city, 
      number, 
      street, 
      status, 
      entry_date, 
      exit_date, 
      name_receiver, 
      cpf_receiver
    });

    return order;
  }
}
