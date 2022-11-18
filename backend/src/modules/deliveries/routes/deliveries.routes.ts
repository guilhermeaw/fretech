import { Router } from 'express';

import DeliveryController from '../controllers/DeliveryController';

const deliveriesRouter = Router();

const develieriesController = new DeliveryController();

deliveriesRouter.post('/create', develieriesController.create);
// deliveriesRouter.delete('/:id', develieriesController.delete);
// deliveriesRouter.get('/me', develieriesController.listMy);

export default deliveriesRouter;
