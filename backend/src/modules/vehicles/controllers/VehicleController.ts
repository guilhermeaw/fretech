import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateVehicleService from '../services/CreateVehicleService';

export default class VehicleController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { plate, model, capacity } = request.body;

    const vehicle = await new CreateVehicleService().execute({
      plate,
      model,
      capacity,
    });

    return response.json(instanceToPlain(vehicle));
  }
}
