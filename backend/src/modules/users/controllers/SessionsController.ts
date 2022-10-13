import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateSessionService from '../services/CreateSessionService';

export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const { token, user } = await new CreateSessionService().execute({
      email,
      password,
    });

    return response.json({ user: instanceToPlain(user), token });
  }
}
