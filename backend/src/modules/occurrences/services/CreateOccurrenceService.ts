import { ICreateOccurrenceDTO } from '../dtos/ICreateOccurrenceDTO';
import Occurrence from '../entities/Occurrence';
import OccurrenceRepository from '../repositories/OccurrenceRepository';

export default class CreateOccurenceService {
  private occurrenceRepository: OccurrenceRepository;

  constructor() {
    this.occurrenceRepository = new OccurrenceRepository();
  }

  public async execute(
    occurrenceData: ICreateOccurrenceDTO,
  ): Promise<Occurrence> {
    return this.occurrenceRepository.create(occurrenceData);
  }
}
