import { MoreThan, Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Vehicle from '../entities/Vehicle';

export default class VehicleRepository {
  private ormRepository: Repository<Vehicle>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Vehicle);
  }

  public async create(vehicleData: Omit<Vehicle, 'id'>): Promise<Vehicle> {
    const vehicle = this.ormRepository.create(vehicleData);
    await this.ormRepository.save(vehicle);

    return vehicle;
  }
}
