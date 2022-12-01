import User from '../entities/User';
import UsersRepository from '../repositories/UsersRepository';

export default class FindUserService {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public async execute(id: number): Promise<User | null> {
    return this.usersRepository.findById(id);
  }
}
