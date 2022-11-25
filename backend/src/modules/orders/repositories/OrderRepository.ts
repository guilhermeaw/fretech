import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Order from '../entities/Order';

export default class OrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Order);
  }

  public async create(orderData: Omit<Order, 'id'>): Promise<Order> {
    const order = this.ormRepository.create(orderData);
    await this.ormRepository.save(order);

    return order;
  }

  // public async findByDate(start_date: string): Promise<Delivery | null> {
  //   return await this.ormRepository.find({
  //     where: { last_modified:  MoreThan(start_date) },
  //   });
  // }
}
