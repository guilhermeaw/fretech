import AppError from '@shared/errors/AppError';
import User from '../entities/User';
import BCryptHashProvider from '../providers/BCryptHashProvider';
import UsersRepository from '../repositories/UsersRepository';

export default class UpdateUserService {
  private usersRepository: UsersRepository;

  private hashProvider: BCryptHashProvider;

  constructor() {
    this.usersRepository = new UsersRepository();
    this.hashProvider = new BCryptHashProvider();
  }

  public async execute({
    email,
    name,
    role,
    id,
    phone,
    password,
  }: User): Promise<User> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new AppError('Usuário não encontrado.');
    }

    let hashedPassword = password;

    if (password) {
      hashedPassword = await this.hashProvider.generateHash(password);
    }

    return this.usersRepository.update({
      id,
      userData: {
        email,
        name,
        role,
        phone,
        password: hashedPassword,
      },
    });
  }
}
