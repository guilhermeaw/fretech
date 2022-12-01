import User from '../entities/User';
import UsersRepository from '../repositories/UsersRepository';

export default class ListDeliverymansService {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public async execute(): Promise<User[]> {
    return this.usersRepository.listDeliverymans();
  }
}
