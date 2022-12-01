import { Router } from 'express';

import OccurrenceController from '../controllers/OccurrenceController';
import ensureAuthenticated from '../../users/middlewares/ensureAuthenticated';

const occurrencesRouter = Router();

const occurrencesController = new OccurrenceController();

occurrencesRouter.use(ensureAuthenticated);

occurrencesRouter.post('/', occurrencesController.create);
occurrencesRouter.put('/:id', occurrencesController.update);
occurrencesRouter.delete('/:id', occurrencesController.delete);
occurrencesRouter.get('/:id', occurrencesController.findById);
occurrencesRouter.get('/', occurrencesController.index);

export default occurrencesRouter;
