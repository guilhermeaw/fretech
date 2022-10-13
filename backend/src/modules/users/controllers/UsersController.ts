import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, role, phone } = request.body;

    const user = await new CreateUserService().execute({
      name,
      email,
      password,
      role,
      phone,
    });

    return response.json(instanceToPlain(user));
  }
}
