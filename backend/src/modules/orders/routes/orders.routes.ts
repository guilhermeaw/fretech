import { Router } from 'express';

import OrderController from '../controllers/OrderController';
import ensureAuthenticated from '../../users/middlewares/ensureAuthenticated';

const ordersRouter = Router();

const orderController = new OrderController();

ordersRouter.use(ensureAuthenticated);

ordersRouter.post('/', orderController.create);
ordersRouter.put('/:id', orderController.update);
ordersRouter.delete('/:id', orderController.delete);
ordersRouter.get('/:id', orderController.findById);
ordersRouter.get('/', orderController.index);
// ordersRouter.get('/:deliverymanId', orderController.listByDeliveryman);

export default ordersRouter;
