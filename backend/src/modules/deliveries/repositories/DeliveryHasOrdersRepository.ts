import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import DeliveryHasOrders from '../entities/DeliveryHasOrders';

interface ICreateDeliveryHasOrdersDTO {
  order_id: number;
  delivery_id: number;
}

export default class DeliveryHasOrdersRepository {
  private ormRepository: Repository<DeliveryHasOrders>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(DeliveryHasOrders);
  }

  public async createMultiple(
    data: ICreateDeliveryHasOrdersDTO[],
  ): Promise<DeliveryHasOrders[]> {
    const deliveryHasOrders = this.ormRepository.create(data);
    await this.ormRepository.save(deliveryHasOrders);

    return deliveryHasOrders;
  }

  // public async findByDate(start_date: string): Promise<Delivery | null> {
  //   return await this.ormRepository.find({
  //     where: { last_modified:  MoreThan(start_date) },
  //   });
  // }
}
