import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateVehicleService from '../services/CreateVehicleService';
import DeleteVehicleService from '../services/DeleteVehicleService';
import FindVehicleService from '../services/FindVehicleService';
import ListVehiclesService from '../services/ListVehiclesService';
import UpdateVehicleService from '../services/UpdateVehicleService';

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

  public async update(request: Request, response: Response): Promise<Response> {
    const { plate, model, capacity } = request.body;

    const { id } = request.params;
    const idAsNumber = Number(id);

    const vehicle = await new UpdateVehicleService().execute({
      plate,
      model,
      capacity,
      id: idAsNumber,
    });

    return response.json(instanceToPlain(vehicle));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    await new DeleteVehicleService().execute(idAsNumber);
    return response.json({ id: idAsNumber });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const vehicles = await new ListVehiclesService().execute();

    return response.json(instanceToPlain(vehicles));
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    const vehicle = await new FindVehicleService().execute(idAsNumber);

    return response.json(instanceToPlain(vehicle));
  }
}
