import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import CreateErrorService from '../service/CreateErrorService';

export default class ErrorsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const description = JSON.stringify(request);

    if (!description) {
      return response.status(400).json({
        status: 'error',
        message:
          'A propriedade "description" é obrigatória no corpo da requisição.',
      });
    }

    const error = await new CreateErrorService().execute({
      description,
    });

    return response.json(instanceToPlain(error));
  }
}
