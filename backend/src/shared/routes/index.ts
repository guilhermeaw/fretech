import { Router } from 'express';

import ordersRouter from 'modules/orders/routes/orders.routes';
import deliveriesRouter from 'modules/deliveries/routes/deliveries.routes';

import vehiclesRouter from 'modules/vehicles/routes/vehicles.routes';
import userRoutes from '../../modules/users/routes/user.routes';
import sessionsRouter from '../../modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRouter);

routes.use('/orders', ordersRouter);
routes.use('/deliveries', deliveriesRouter);
routes.use('/vehicles', vehiclesRouter);

export default routes;
