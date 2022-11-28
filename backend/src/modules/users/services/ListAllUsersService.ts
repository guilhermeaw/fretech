import User from '../entities/User';
import UsersRepository from '../repositories/UsersRepository';

export default class ListAllUsersService {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.listAll();

    return users;
  }
}
