import { Router } from 'express';

import OrderController from '../controllers/OrderController';

const ordersRouter = Router();

const orderController = new OrderController();

ordersRouter.post('/', orderController.create);
ordersRouter.put('/:id', orderController.update);
ordersRouter.delete('/:id', orderController.delete);
ordersRouter.get('/:id', orderController.findById);
ordersRouter.get('/', orderController.index);

export default ordersRouter;
