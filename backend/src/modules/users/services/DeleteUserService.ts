import UsersRepository from '../repositories/UsersRepository';

export default class DeleteUserService {
  private userRepository: UsersRepository;

  constructor() {
    this.userRepository = new UsersRepository();
  }

  public async execute(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
