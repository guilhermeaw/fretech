import { Repository } from 'typeorm';

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

  public async update(vehicleData: Vehicle): Promise<Vehicle> {
    const vehicle = this.ormRepository.create(vehicleData);
    await this.ormRepository.save(vehicle);

    return vehicle;
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async list(): Promise<Vehicle[]> {
    return this.ormRepository.find({ order: { model: 'ASC' } });
  }

  public async findById(id: number): Promise<Vehicle | null> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async findByPlate(plate: string): Promise<Vehicle | null> {
    return this.ormRepository.findOne({ where: { plate } });
  }
}
