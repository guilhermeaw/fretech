import Occurrence from '../entities/Occurrence';
import OccurrenceRepository from '../repositories/OccurrenceRepository';

export default class FindOccurrenceService {
  private occurrencesRepository: OccurrenceRepository;

  constructor() {
    this.occurrencesRepository = new OccurrenceRepository();
  }

  public async execute(id: number): Promise<Occurrence | null> {
    return this.occurrencesRepository.findById(id);
  }
}
