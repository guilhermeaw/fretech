import { Router } from 'express';

import VehicleController from '../controllers/VehicleController';

const vehiclesRouter = Router();

const vehiclesController = new VehicleController();

vehiclesRouter.post('/', vehiclesController.create);
vehiclesRouter.put('/:id', vehiclesController.update);
vehiclesRouter.delete('/:id', vehiclesController.delete);
vehiclesRouter.get('/:id', vehiclesController.findById);
vehiclesRouter.get('/', vehiclesController.index);

export default vehiclesRouter;
