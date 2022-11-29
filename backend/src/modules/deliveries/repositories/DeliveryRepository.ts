import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Delivery from '../entities/Delivery';

import { ICreateDeliveryDTO } from '../dtos/ICreateDeliveryDTO';

type CreateDelivery = Omit<ICreateDeliveryDTO, 'orders_ids'> & {
  orders: Delivery['orders'];
};

export default class DeliveryRepository {
  private ormRepository: Repository<Delivery>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Delivery);
  }

  public async create(deliveryData: CreateDelivery): Promise<Delivery> {
    const delivery = this.ormRepository.create(deliveryData);
    await this.ormRepository.save(delivery);

    return delivery;
  }

  public async list(): Promise<Delivery[]> {
    return this.ormRepository.find();
  }

  // public async findByDate(start_date: string): Promise<Delivery | null> {
  //   return await this.ormRepository.find({
  //     where: { last_modified:  MoreThan(start_date) },
  //   });
  // }
}
