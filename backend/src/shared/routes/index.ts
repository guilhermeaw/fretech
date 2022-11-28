import { Router } from 'express';

import ordersRouter from 'modules/orders/routes/orders.routes';
import userRoutes from '../../modules/users/routes/user.routes';
import sessionsRouter from '../../modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRouter);

routes.use('/orders', ordersRouter);

export default routes;
