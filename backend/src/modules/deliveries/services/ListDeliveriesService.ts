import Delivery from '../entities/Delivery';
import DeliveryRepository from '../repositories/DeliveryRepository';

export default class ListDeliveriesService {
  private deliveryRepository: DeliveryRepository;

  constructor() {
    this.deliveryRepository = new DeliveryRepository();
  }

  public async execute(): Promise<Delivery[]> {
    return this.deliveryRepository.list();
  }
}
