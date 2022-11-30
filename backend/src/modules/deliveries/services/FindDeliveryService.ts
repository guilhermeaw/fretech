import Delivery from '../entities/Delivery';
import DeliveryRepository from '../repositories/DeliveryRepository';

export default class FindDeliveryService {
  private deliveriesRepository: DeliveryRepository;

  constructor() {
    this.deliveriesRepository = new DeliveryRepository();
  }

  public async execute(id: number): Promise<Delivery | null> {
    return this.deliveriesRepository.findById(id);
  }
}
