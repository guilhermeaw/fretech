// import { instanceToPlain } from 'class-transformer';
// import { Request, Response } from 'express';

// import CreateDeliveryService from '../services/CreateDeliveryService';

// export default class DeliveryController {
//     public async create(request: Request, response:Response): Promise<Response> {
//         const {name, email, password, role, phone} = request.body;

//         const user = await new CreateDeliveryService().execute({
//             name, 
//             email,
//             password,
//             role,
//             phone,
//         })
        
//         return response.json(instanceToPlain(user));
//     }
// }