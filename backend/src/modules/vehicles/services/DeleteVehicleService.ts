import VehicleRepository from '../repositories/VehicleRepository';

export default class DeleteVehicleService {
  private vehicleRepository: VehicleRepository;

  constructor() {
    this.vehicleRepository = new VehicleRepository();
  }

  public async execute(id: number): Promise<void> {
    await this.vehicleRepository.delete(id);
  }
}
