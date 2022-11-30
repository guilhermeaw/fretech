import { In, Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Order from '../entities/Order';
import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { IUpdateOrderDTO } from '../dtos/IUpdateOrderDTO';

export default class OrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Order);
  }

  public async create(orderData: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(orderData);
    await this.ormRepository.save(order);

    return order;
  }

  public async update(orderData: IUpdateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(orderData);
    await this.ormRepository.save(order);

    return order;
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async listByIds(ids: number[]): Promise<Order[]> {
    return this.ormRepository.find({ where: { id: In(ids) } });
  }

  public async list(): Promise<Order[]> {
    return this.ormRepository.find({ order: { id: 'ASC' } });
  }

  public async findById(id: number): Promise<Order | null> {
    return this.ormRepository.findOne({ where: { id } });
  }
}
