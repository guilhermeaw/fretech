import AppError from '@shared/errors/AppError';
import Vehicle from '../entities/Vehicle';
import VehicleRepository from '../repositories/VehicleRepository';

interface ICreateVehicleDTO {
  plate: string;
  model: string;
  capacity: number;
}

export default class CreateVehicleService {
  private vehicleRepository: VehicleRepository;

  constructor() {
    this.vehicleRepository = new VehicleRepository();
  }

  public async execute({
    plate,
    model,
    capacity,
  }: ICreateVehicleDTO): Promise<Vehicle> {
    const checkVehicleExists = await this.vehicleRepository.findByPlate(plate);

    if (checkVehicleExists) {
      throw new AppError(
        'Já existe um veículo cadastrado com a placa informada.',
      );
    }

    const delivery = await this.vehicleRepository.create({
      plate,
      model,
      capacity,
    });

    return delivery;
  }
}
