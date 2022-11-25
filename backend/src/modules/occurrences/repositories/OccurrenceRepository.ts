import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Occurrence from '../entities/Occurrence';

export default class OccurrenceRepository {
  private ormRepository: Repository<Occurrence>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Occurrence);
  }

  public async create(occurrenceData: Omit<Occurrence, 'id'>): Promise<Occurrence> {
    const occurrence = this.ormRepository.create(occurrenceData);
    await this.ormRepository.save(occurrence);

    return occurrence;
  }
}
