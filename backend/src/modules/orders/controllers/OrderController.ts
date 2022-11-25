import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateOccurenceService from '../services/CreateOccurenceService';

export default class OccurenceController {
    public async create(request: Request, response:Response): Promise<Response> {
        const { 
            cep, 
            state, 
            city, 
            number, 
            street, 
            status, 
            entry_date, 
            exit_date, 
            name_receiver, 
            cpf_receiver
        } = request.body;

        const occurence = await new CreateOccurenceService().execute({
            cep, 
            state, 
            city, 
            number, 
            street, 
            status, 
            entry_date, 
            exit_date, 
            name_receiver, 
            cpf_receiver
        })
        
        return response.json(instanceToPlain(occurence));
    }
}