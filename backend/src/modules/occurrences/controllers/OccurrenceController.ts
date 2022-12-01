import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateOccurrenceService from '../services/CreateOccurrenceService';
import DeleteOccurrenceService from '../services/DeleteOccurrenceService';
import FindOccurrenceService from '../services/FindOccurrenceService';
import ListOccurrencesService from '../services/ListOccurrencesService';
import UpdateOccurrenceService from '../services/UpdateOccurrenceService';

export default class OccurrenceController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description, name, order_id } = request.body;

    const occurrence = await new CreateOccurrenceService().execute({
      description,
      name,
      created_at: new Date(),
      order_id,
    });

    return response.json(instanceToPlain(occurrence));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { description, name, order_id, created_at } = request.body;

    const { id } = request.params;
    const idAsNumber = Number(id);

    const occurrence = await new UpdateOccurrenceService().execute({
      description,
      name,
      order_id,
      created_at,
      id: idAsNumber,
    });

    return response.json(instanceToPlain(occurrence));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    await new DeleteOccurrenceService().execute(idAsNumber);
    return response.json({ id: idAsNumber });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const occurrences = await new ListOccurrencesService().execute();

    return response.json(instanceToPlain(occurrences));
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const idAsNumber = Number(id);

    const occurrence = await new FindOccurrenceService().execute(idAsNumber);

    return response.json(instanceToPlain(occurrence));
  }
}
