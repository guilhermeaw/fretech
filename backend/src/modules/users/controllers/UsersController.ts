import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import { UserRole } from '../entities/User';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import ListAllUsersService from '../services/ListAllUsersService';

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

  public async update(request: Request, response: Response): Promise<Response> {
    const { phone, password, email, name, role = UserRole.DELIVERYMAN } = request.body;
    const { id } = request.params;

    const idAsNumber = Number(id);

    await new UpdateUserService().execute({
      email,
      name,
      role,
      password,
      phone,
      id: idAsNumber,
    });

    return response.status(204).json();
  }

  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const users = await new ListAllUsersService().execute();

    return response.json(instanceToPlain(users));
  }
}
