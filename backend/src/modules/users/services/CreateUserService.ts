import AppError from '@shared/errors/AppError';
import User, { UserRole } from '../entities/User';
import BCryptHashProvider from '../providers/BCryptHashProvider';
import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone: string;
}

export default class CreateUserService {
  private usersRepository: UsersRepository;

  private hashProvider: BCryptHashProvider;

  constructor() {
    this.hashProvider = new BCryptHashProvider();
    this.usersRepository = new UsersRepository();
  }

  public async execute({
    name,
    email,
    password,
    phone,
    role,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('O e-mail informado já se encontra em uso.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      role,
      phone,
    });

    return user;
  }
}
