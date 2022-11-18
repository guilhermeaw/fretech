import { MoreThan, Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Delivery from '../entities/Delivery';
import { ICreateDeliveryDTO } from '../dtos/ICreateDeliveryDTO';

export default class DeliveryRepository {
  private ormRepository: Repository<Delivery>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Delivery);
  }

  public async create(deliveryData: Omit<ICreateDeliveryDTO, 'id'>): Promise<Delivery> {
    const delivery = this.ormRepository.create(deliveryData);
    await this.ormRepository.save(delivery);

    return delivery;
  }

  // public async findByDate(start_date: string): Promise<Delivery | null> {
  //   return await this.ormRepository.find({
  //     where: { last_modified:  MoreThan(start_date) },
  //   });
  // }
}
