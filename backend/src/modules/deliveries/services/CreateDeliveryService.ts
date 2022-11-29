import { ICreateDeliveryDTO } from '../dtos/ICreateDeliveryDTO';
import Delivery from '../entities/Delivery';
import DeliveryHasOrdersRepository from '../repositories/DeliveryHasOrdersRepository';
import DeliveryRepository from '../repositories/DeliveryRepository';

export default class CreateDeliveryService {
  private deliveryRepository: DeliveryRepository;

  private deliveryHasOrdersRepository: DeliveryHasOrdersRepository;

  constructor() {
    this.deliveryRepository = new DeliveryRepository();
    this.deliveryHasOrdersRepository = new DeliveryHasOrdersRepository();
  }

  public async execute({
    user_id,
    vehicle_id,
    orders_ids,
    start_date,
    end_date,
  }: ICreateDeliveryDTO): Promise<Delivery> {
    // Validações
    // const checkDeliveryExists = await this.deliveryRepository.findByDate(start_date);

    // if (checkDeliveryExists) {
    //   throw new AppError('O xx informado já se encontra em uso.');
    // }
    const delivery = await this.deliveryRepository.create({
      user_id,
      vehicle_id,
      start_date,
      end_date,
    });

    const deliveryHasOrders = orders_ids.map(order_id => ({
      order_id,
      delivery_id: delivery.id,
    }));

    await this.deliveryHasOrdersRepository.createMultiple(deliveryHasOrders);

    return delivery;
  }
}
