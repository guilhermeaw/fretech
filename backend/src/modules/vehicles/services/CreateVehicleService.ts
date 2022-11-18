import AppError from '@shared/errors/AppError';

import Vehicle from '../entities/Vehicle';
import VehicleRepository from '../repositories/VehicleRepository';

export default class CreateVehicleService {
  private vehicleRepository: VehicleRepository;

  constructor() {
    this.vehicleRepository = new VehicleRepository();
  }

  public async execute({ plate, model, volume }: Vehicle): Promise<Vehicle> {
    const delivery = await this.vehicleRepository.create({
        plate,
        model,
        volume
    });

    return delivery;
  }
}
