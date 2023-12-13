import { Router } from 'express';

import EmailController from '../controllers/EmailController';

const routes = Router();

const emailController = new EmailController();

routes.post('/send', emailController.sendEmail);

export default routes;
