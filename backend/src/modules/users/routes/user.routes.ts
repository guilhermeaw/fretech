import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/', usersController.create);
usersRouter.put('/update/:id', usersController.update);
usersRouter.get('/list-all', usersController.listAll);

export default usersRouter;
