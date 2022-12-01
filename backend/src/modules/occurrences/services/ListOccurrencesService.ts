import Occurrence from '../entities/Occurrence';
import OccurrenceRepository from '../repositories/OccurrenceRepository';

export default class ListOccurrencesService {
  private occurrencesRepository: OccurrenceRepository;

  constructor() {
    this.occurrencesRepository = new OccurrenceRepository();
  }

  public async execute(): Promise<Occurrence[]> {
    return this.occurrencesRepository.list();
  }
}
