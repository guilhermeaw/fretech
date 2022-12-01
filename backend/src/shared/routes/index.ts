import { Router } from 'express';

import deliveriesRouter from '../../modules/deliveries/routes/deliveries.routes';
import ordersRouter from '../../modules/orders/routes/orders.routes';
import vehiclesRouter from '../../modules/vehicles/routes/vehicles.routes';
import occurrencesRouter from '../../modules/occurrences/routes/occurrences.routes';
import userRoutes from '../../modules/users/routes/user.routes';
import sessionsRouter from '../../modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRouter);

routes.use('/orders', ordersRouter);
routes.use('/deliveries', deliveriesRouter);
routes.use('/vehicles', vehiclesRouter);
routes.use('/occurrences', occurrencesRouter);

export default routes;
