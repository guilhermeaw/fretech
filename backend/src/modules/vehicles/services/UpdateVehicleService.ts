import Vehicle from '../entities/Vehicle';
import VehicleRepository from '../repositories/VehicleRepository';

export default class UpdateVehicleService {
  private vehicleRepository: VehicleRepository;

  constructor() {
    this.vehicleRepository = new VehicleRepository();
  }

  public async execute(vehicleToUpdate: Vehicle): Promise<Vehicle> {
    return this.vehicleRepository.update(vehicleToUpdate);
  }
}
