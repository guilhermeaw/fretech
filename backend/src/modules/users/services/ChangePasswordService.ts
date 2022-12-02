import AppError from '@shared/errors/AppError';
import User from '../entities/User';
import UsersRepository from '../repositories/UsersRepository';
import { IChangePasswordDTO } from '../dtos/IChangePasswordDTO';
import BCryptHashProvider from '../providers/BCryptHashProvider';

export default class ChangePasswordService {
  private usersRepository: UsersRepository;

  private hashProvider: BCryptHashProvider;

  constructor() {
    this.usersRepository = new UsersRepository();
    this.hashProvider = new BCryptHashProvider();
  }

  public async execute({
    newPassword,
    oldPassword,
    id,
  }: IChangePasswordDTO): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    if (newPassword && oldPassword) {
      const checkOldPassword = await this.hashProvider.compareHash(
        oldPassword,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('A senha atual está incorreta.');
      }

      user.password = await this.hashProvider.generateHash(newPassword);
    }

    return this.usersRepository.update({
      id,
      userData: {
        ...user,
      },
    });
  }
}
