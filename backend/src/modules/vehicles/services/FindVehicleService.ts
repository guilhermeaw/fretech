import Vehicle from '../entities/Vehicle';
import VehicleRepository from '../repositories/VehicleRepository';

export default class FindVehicleService {
  private vehiclesRepository: VehicleRepository;

  constructor() {
    this.vehiclesRepository = new VehicleRepository();
  }

  public async execute(id: number): Promise<Vehicle | null> {
    return this.vehiclesRepository.findById(id);
  }
}
