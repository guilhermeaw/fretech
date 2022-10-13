import { Router } from 'express';

import userRoutes from '../../modules/users/routes/user.routes';
import sessionsRouter from '../../modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRouter);

export default routes;
