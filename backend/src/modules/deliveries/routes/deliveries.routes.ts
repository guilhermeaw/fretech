import { Router } from 'express';
import ensureAuthenticated from '../../users/middlewares/ensureAuthenticated';

import DeliveryController from '../controllers/DeliveryController';

const deliveriesRouter = Router();

const develieriesController = new DeliveryController();

deliveriesRouter.use(ensureAuthenticated);

deliveriesRouter.post('/', develieriesController.create);
deliveriesRouter.put('/:id', develieriesController.update);
deliveriesRouter.delete('/:id', develieriesController.delete);
deliveriesRouter.get('/', develieriesController.index);
deliveriesRouter.get('/:id', develieriesController.findById);

export default deliveriesRouter;
