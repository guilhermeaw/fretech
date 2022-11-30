import DeliveryRepository from '../repositories/DeliveryRepository';

export default class DeleteDeliveryService {
  private deliveriesRepository: DeliveryRepository;

  constructor() {
    this.deliveriesRepository = new DeliveryRepository();
  }

  public async execute(id: number): Promise<void> {
    await this.deliveriesRepository.delete(id);
  }
}
