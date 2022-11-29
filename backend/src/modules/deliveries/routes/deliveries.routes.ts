import { Router } from 'express';

import DeliveryController from '../controllers/DeliveryController';

const deliveriesRouter = Router();

const develieriesController = new DeliveryController();

deliveriesRouter.post('/', develieriesController.create);
deliveriesRouter.get('/', develieriesController.index);
// deliveriesRouter.delete('/:id', develieriesController.delete);
// deliveriesRouter.get('/me', develieriesController.listMy);

export default deliveriesRouter;
