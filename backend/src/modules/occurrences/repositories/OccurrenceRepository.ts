import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Occurrence from '../entities/Occurrence';
import { ICreateOccurrenceDTO } from '../dtos/ICreateOccurrenceDTO';
import { IUpdateOccurrenceDTO } from '../dtos/IUpdateOccurrenceDTO';

export default class OccurrenceRepository {
  private ormRepository: Repository<Occurrence>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Occurrence);
  }

  public async create(
    occurrenceData: ICreateOccurrenceDTO,
  ): Promise<Occurrence> {
    const occurrence = this.ormRepository.create(occurrenceData);
    await this.ormRepository.save(occurrence);

    return occurrence;
  }

  public async update(
    occurrenceData: IUpdateOccurrenceDTO,
  ): Promise<Occurrence> {
    const occurrence = this.ormRepository.create(occurrenceData);
    await this.ormRepository.save(occurrence);

    return occurrence;
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async list(): Promise<Occurrence[]> {
    return this.ormRepository.find({ order: { created_at: 'DESC' } });
  }

  public async findById(id: number): Promise<Occurrence | null> {
    return this.ormRepository.findOne({ where: { id } });
  }
}
