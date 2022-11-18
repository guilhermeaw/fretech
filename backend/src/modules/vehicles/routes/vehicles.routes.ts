import { Router } from 'express';

import VehicleController from '../controllers/VehicleController';

const vehiclesRouter = Router();

const vehiclesController = new VehicleController();

vehiclesRouter.post('/create', vehiclesController.create);

export default vehiclesRouter;
