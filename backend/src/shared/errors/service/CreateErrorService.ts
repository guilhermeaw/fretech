import { Error } from '../entities/error';
import ErrorsRepository from '../repositories/errorsRepository';

interface IRequest {
  description: string;
}

export default class CreateErrorService {
  private errorsRepository: ErrorsRepository;

  constructor() {
    this.errorsRepository = new ErrorsRepository();
  }

  public async execute({ description }: IRequest): Promise<Error> {
    console.log(description);

    const error = await this.errorsRepository.create({
      description,
    });

    return error;
  }
}
