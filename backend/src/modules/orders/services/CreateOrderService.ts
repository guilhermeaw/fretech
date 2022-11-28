import Order from '../entities/Order';
import OrderRepository from '../repositories/OrderRepository';

type ICreateOrderDTO = Omit<
  Order,
  'id' | 'asignature_url' | 'getAddress' | 'getReceiver'
>;

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
    cpf_receiver,
    phone_receiver,
  }: ICreateOrderDTO): Promise<Order> {
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
      cpf_receiver,
      phone_receiver,
      asignature_url: undefined,
    });

    return order;
  }
}
