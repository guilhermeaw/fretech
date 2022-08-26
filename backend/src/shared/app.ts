import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'API working as expected!' });
});

app.get('/teste', (request: Request, response: Response) => {
  return response.json({ message: 'Teste' });
});

export default app;
