import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import User from '../entities/User';

export default class UsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
  }

  public async create(userData: Omit<User, 'id'>): Promise<User> {
    const user = this.ormRepository.create(userData);
    await this.ormRepository.save(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.ormRepository.findOne({
      where: { email },
    });
  }
}
