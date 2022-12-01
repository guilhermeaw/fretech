import OccurrenceRepository from '../repositories/OccurrenceRepository';

export default class DeleteOccurrenceService {
  private occurrenceRepository: OccurrenceRepository;

  constructor() {
    this.occurrenceRepository = new OccurrenceRepository();
  }

  public async execute(id: number): Promise<void> {
    await this.occurrenceRepository.delete(id);
  }
}
