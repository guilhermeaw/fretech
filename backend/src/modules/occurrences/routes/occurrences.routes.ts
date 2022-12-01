import { Router } from 'express';

import OccurrenceController from '../controllers/OccurrenceController';

const occurrencesRouter = Router();

const occurrencesController = new OccurrenceController();

occurrencesRouter.post('/', occurrencesController.create);
occurrencesRouter.put('/:id', occurrencesController.update);
occurrencesRouter.delete('/:id', occurrencesController.delete);
occurrencesRouter.get('/:id', occurrencesController.findById);
occurrencesRouter.get('/', occurrencesController.index);

export default occurrencesRouter;
