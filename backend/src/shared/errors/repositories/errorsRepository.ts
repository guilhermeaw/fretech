import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import { Error } from '../entities/error';

export default class ErrorsRepository {
  private ormRepository: Repository<Error>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Error);
  }

  public async create(errorData: Omit<Error, 'id'>): Promise<Error> {
    const error = this.ormRepository.create(errorData);
    await this.ormRepository.save(error);

    return error;
  }
}
