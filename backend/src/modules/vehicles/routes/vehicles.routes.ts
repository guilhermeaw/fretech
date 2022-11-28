import { Router } from 'express';

import VehicleController from '../controllers/VehicleController';

const vehiclesRouter = Router();

const vehiclesController = new VehicleController();

vehiclesRouter.post('/', vehiclesController.create);

export default vehiclesRouter;
