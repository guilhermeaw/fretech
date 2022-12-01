import Vehicle from '../entities/Vehicle';
import VehicleRepository from '../repositories/VehicleRepository';

export default class ListVehiclesService {
  private vehiclesRepository: VehicleRepository;

  constructor() {
    this.vehiclesRepository = new VehicleRepository();
  }

  public async execute(): Promise<Vehicle[]> {
    return this.vehiclesRepository.list();
  }
}
