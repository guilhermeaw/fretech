import { Router } from 'express';

import VehicleController from '../controllers/VehicleController';
import ensureAuthenticated from '../../users/middlewares/ensureAuthenticated';

const vehiclesRouter = Router();

const vehiclesController = new VehicleController();

vehiclesRouter.use(ensureAuthenticated);

vehiclesRouter.post('/', vehiclesController.create);
vehiclesRouter.put('/:id', vehiclesController.update);
vehiclesRouter.delete('/:id', vehiclesController.delete);
vehiclesRouter.get('/:id', vehiclesController.findById);
vehiclesRouter.get('/', vehiclesController.index);

export default vehiclesRouter;
