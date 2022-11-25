import AppError from '@shared/errors/AppError';

import Occurrence from '../entities/Occurrence';
import OccurrenceRepository from '../repositories/OccurrenceRepository';

export default class CreateOccurenceService {
  private occurrenceRepository: OccurrenceRepository;

  constructor() {
    this.occurrenceRepository = new OccurrenceRepository();
  }

  public async execute({ 
    description,
    image,
    name,
    orders_id }: Occurrence): Promise<Occurrence> {
    const occurrence = await this.occurrenceRepository.create({
      description,
      image,
      name,
      orders_id
    });

    return occurrence;
  }
}
