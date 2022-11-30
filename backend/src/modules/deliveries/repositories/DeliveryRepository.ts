import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Delivery from '../entities/Delivery';

import { ICreateDeliveryDTO } from '../dtos/ICreateDeliveryDTO';
import { IUpdateDeliveryDTO } from '../dtos/IUpdateDeliveryDTO';

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

  public async findById(id: number): Promise<Delivery | null> {
    const devlivery = await this.ormRepository.findOne({
      where: { id },
    });

    return devlivery;
  }

  public async update({ id, deliveryData }: IUpdateDeliveryDTO): Promise<void> {
    await this.ormRepository.update({ id }, deliveryData);
  }
}
