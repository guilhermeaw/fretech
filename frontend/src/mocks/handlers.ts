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
          avatar_url: '',
        },
        {
          id: 2,
          name: 'Maria da Silva',
          email: 'maria@gmail.com',
          avatar_url: '',
        },
        {
          id: 3,
          name: 'Alfredo Costa',
          email: 'alfredo@gmail.com',
          avatar_url: '',
        },
      ]),
    );
  }),
];
