import { IUpdateOccurrenceDTO } from '../dtos/IUpdateOccurrenceDTO';
import Occurrence from '../entities/Occurrence';
import OccurrenceRepository from '../repositories/OccurrenceRepository';

export default class UpdateOccurrenceService {
  private occurrenceRepository: OccurrenceRepository;

  constructor() {
    this.occurrenceRepository = new OccurrenceRepository();
  }

  public async execute(
    occurrenceToUpdate: IUpdateOccurrenceDTO,
  ): Promise<Occurrence> {
    return this.occurrenceRepository.update(occurrenceToUpdate);
  }
}
