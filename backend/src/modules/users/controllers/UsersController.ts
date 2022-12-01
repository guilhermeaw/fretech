import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import { UserRole } from '../entities/User';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import ListDeliverymansService from '../services/ListDeliverymansService';
import FindUserService from '../services/FindUserService';
import DeleteUserService from '../services/DeleteUserService';

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
    const {
      phone,
      password,
      email,
      name,
      role = UserRole.DELIVERYMAN,
    } = request.body;
    const { id } = request.params;

    const idAsNumber = Number(id);

    const user = await new UpdateUserService().execute({
      email,
      name,
      role,
      password,
      phone,
      id: idAsNumber,
    });

    return response.json(instanceToPlain(user));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    await new DeleteUserService().execute(idAsNumber);
    return response.json({ id: idAsNumber });
  }

  public async listDeliverymans(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const deliverymans = await new ListDeliverymansService().execute();

    return response.json(instanceToPlain(deliverymans));
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    const user = await new FindUserService().execute(idAsNumber);

    return response.json(instanceToPlain(user));
  }
}
