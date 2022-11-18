import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateVehicleService from '../services/CreateVehicleService';

interface IRequest {
    email: string;
    password: string;
  }

export default class VehicleController {
    public async create(request: Request, response:Response): Promise<Response> {
        const { plate, model, volume } = request.body;

        const vehicle = await new CreateVehicleService().execute({
            plate, 
            model,
            volume,
        })
        
        return response.json(instanceToPlain(vehicle));
    }
}