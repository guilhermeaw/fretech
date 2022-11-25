import { Router } from 'express';

import OccurrenceController from '../controllers/OccurrenceController';

const occurrencesRouter = Router();

const occurrenceController = new OccurrenceController();

occurrencesRouter.post('/create', occurrenceController.create);

export default occurrenceController;
