import { sign } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';
import { authConfig } from '../../../config/auth';
import User from '../entities/User';
import BCryptHashProvider from '../providers/BCryptHashProvider';
import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export default class CreateSessionService {
  private usersRepository: UsersRepository;

  private hashProvider: BCryptHashProvider;

  constructor() {
    this.hashProvider = new BCryptHashProvider();
    this.usersRepository = new UsersRepository();
  }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Combinação incorreta de e-mail e senha.');
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new AppError('Combinação incorreta de e-mail e senha.');
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id.toString(),
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
