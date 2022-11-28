import { Router } from 'express';

import OrderController from '../controllers/OrderController';

const ordersRouter = Router();

const ordersController = new OrderController();

ordersRouter.post('/', ordersController.create);
// deliveriesRouter.delete('/:id', develieriesController.delete);
// deliveriesRouter.get('/me', develieriesController.listMy);

export default ordersRouter;
