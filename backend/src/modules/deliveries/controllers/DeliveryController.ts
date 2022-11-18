import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateDeliveryService from '../services/CreateDeliveryService';

export default class DeliveryController {
    public async create(request: Request, response:Response): Promise<Response> {
        const { user_id, vehicle_id, start_date, end_date } = request.body;

        const delivery = await new CreateDeliveryService().execute({
            user_id: Number(user_id), 
            vehicle_id: Number(vehicle_id),
            start_date,
            end_date
        })
        
        return response.json(instanceToPlain(delivery));
    }
}