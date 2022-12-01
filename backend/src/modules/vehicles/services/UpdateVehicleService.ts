import AppError from '@shared/errors/AppError';
import Vehicle from '../entities/Vehicle';
import VehicleRepository from '../repositories/VehicleRepository';

export default class UpdateVehicleService {
  private vehicleRepository: VehicleRepository;

  constructor() {
    this.vehicleRepository = new VehicleRepository();
  }

  public async execute(vehicleToUpdate: Vehicle): Promise<Vehicle> {
    const vehicleExists = await this.vehicleRepository.findByPlate(
      vehicleToUpdate.plate,
    );

    if (vehicleExists && vehicleExists.id !== vehicleToUpdate.id) {
      throw new AppError(
        'Já existe um veículo cadastrado com a placa informada.',
      );
    }

    return this.vehicleRepository.update(vehicleToUpdate);
  }
}
