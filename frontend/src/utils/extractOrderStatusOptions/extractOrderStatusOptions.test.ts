import { extractOrderStatusOptions } from './extractOrderStatusOptions';

describe('extractOrderStatusOptions util', () => {
  it('should return an array of options', () => {
    expect(extractOrderStatusOptions()).toEqual([
      {
        value: 'PENDING',
        label: 'Pendente',
      },
      {
        value: 'IN_PROGRESS',
        label: 'Em andamento',
      },
      {
        value: 'DELIVERED',
        label: 'Entregue',
      },
      {
        value: 'CANCELED',
        label: 'Cancelado',
      },
      {
        value: 'WITHDRAWN',
        label: 'Retirado',
      },
    ]);
  });
});
