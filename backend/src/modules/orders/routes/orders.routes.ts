import { Router } from 'express';

import OrderController from '../controllers/OrderController';

const ordersRouter = Router();

const ordersController = new OrderController();

ordersRouter.post('/', ordersController.create);
ordersRouter.put('/:id', ordersController.update);
ordersRouter.delete('/:id', ordersController.delete);
ordersRouter.get('/:id', ordersController.findById);
ordersRouter.get('/', ordersController.index);

export default ordersRouter;
