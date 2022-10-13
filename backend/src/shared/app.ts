import express from 'express';
import cors from 'cors';
import errors from './middlewares/errors';
import routes from './routes';

import { initializeDataSource } from './database/ormconfig';


initializeDataSource();

const app = express();

app.use(express.json());
app.use(cors());

// app.get('/', (_: Request, response: Response) => {
//   return response.json({ message: 'API working as expected!' });
// });

// app.get('/teste', (_: Request, response: Response) => {
//   return response.json({ message: 'Teste' });
// });

app.use(routes);
app.use(errors);

export default app;
