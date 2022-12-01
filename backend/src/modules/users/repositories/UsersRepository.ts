import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';
import User, { UserRole } from '../entities/User';

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

  public async update({ id, userData }: IUpdateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ ...userData, id });
    await this.ormRepository.save(user);

    return user;
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async listDeliverymans(): Promise<User[]> {
    return this.ormRepository.find({
      where: { role: UserRole.DELIVERYMAN },
    });
  }

  public async findById(id: number): Promise<User | null> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }
}
