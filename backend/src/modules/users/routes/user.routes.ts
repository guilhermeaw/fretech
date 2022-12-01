import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.use(ensureAuthenticated);

usersRouter.post('/', usersController.create);
usersRouter.put('/:id', usersController.update);
usersRouter.delete('/:id', usersController.delete);
usersRouter.get('/', usersController.listDeliverymans);
usersRouter.get('/:id', usersController.findById);

export default usersRouter;
