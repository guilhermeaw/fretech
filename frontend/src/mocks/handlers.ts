// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const basePath = 'http://localhost:3333';

export const handlers = [
  rest.get(`${basePath}/deliverymans`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'João da Silva',
          email: 'joao@gmail.com',
        },
        {
          id: 2,
          name: 'Maria da Silva',
          email: 'maria@gmail.com',
        },
        {
          id: 3,
          name: 'Alfredo Costa',
          email: 'alfredo@gmail.com',
        },
      ]),
    );
  }),

  rest.post(`${basePath}/deliverymans`, async (req, res, ctx) => {
    const { name, email, phone } = await req.json();

    return res(
      ctx.json({
        id: Math.floor(Math.random() * (10 - 4 + 1) + 4),
        name,
        email,
        phone,
      }),
    );
  }),
];
