import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import errors from './middlewares/errors';
import routes from './routes';

import { initializeDataSource } from './database/ormconfig';

initializeDataSource();

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(errors);

export default app;
