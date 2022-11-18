import AppError from '@shared/errors/AppError';

import { ICreateDeliveryDTO } from '../dtos/ICreateDeliveryDTO';
import Delivery from '../entities/Delivery';
import DeliveryRepository from '../repositories/DeliveryRepository';

export default class CreateDeliveryService {
  private deliveryRepository: DeliveryRepository;

  constructor() {
    this.deliveryRepository = new DeliveryRepository();
  }

  public async execute({ user_id, vehicle_id, start_date, end_date }: ICreateDeliveryDTO): Promise<Delivery> {
    // Validações
    // const checkDeliveryExists = await this.deliveryRepository.findByDate(start_date);

    // if (checkDeliveryExists) {
    //   throw new AppError('O xx informado já se encontra em uso.');
    // }

    const delivery = await this.deliveryRepository.create({
        user_id,
        vehicle_id,
        start_date,
        end_date
    });

    return delivery;
  }
}
