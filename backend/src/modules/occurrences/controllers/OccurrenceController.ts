import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateOccurrenceService from '../services/CreateOccurrenceService';

export default class OccurrenceController {
    public async create(request: Request, response:Response): Promise<Response> {
        const { 
            description,
            image,
            name,
            orders_id
        } = request.body;

        const occurrence = await new CreateOccurrenceService().execute({
            description,
            image,
            name,
            orders_id
        })
        
        return response.json(instanceToPlain(occurrence));
    }
}