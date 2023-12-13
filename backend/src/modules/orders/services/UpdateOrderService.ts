import { IUpdateOrderDTO } from '../dtos/IUpdateOrderDTO';
import Order, { OrderStatus } from '../entities/Order';
import OrderRepository from '../repositories/OrderRepository';
import SendOutForDeliveryEmailService from './SendOutForDeliveryEmailService';

export default class UpdateOrderService {
  private orderRepository: OrderRepository;

  private emailService: SendOutForDeliveryEmailService;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  public async execute(orderToUpdate: IUpdateOrderDTO): Promise<Order> {
    const previousOrder = this.orderRepository.findById(orderToUpdate.id);

    previousOrder
      .then(previousOrderAux => {
        if (
          previousOrderAux !== null &&
          previousOrderAux.status !== OrderStatus.IN_PROGRESS &&
          orderToUpdate.status === OrderStatus.IN_PROGRESS
        ) {
          this.emailService = new SendOutForDeliveryEmailService();

          return this.emailService.sendEmail({
            name: orderToUpdate.name_receiver,
            email: orderToUpdate.email_receiver || 'guilhermeaw9@gmail.com',
          });
        }
      })
      .catch(error => {
        console.error(error);
      });

    return this.orderRepository.update(orderToUpdate);
  }
}
