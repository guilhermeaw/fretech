import { Order } from '../../models';
import { extractOrdersOptions } from './extractOrdersOptions';

const mockOrdersInput = [
  {
    id: 1,
    receiver: {
      name: 'John Doe',
    },
  },
  {
    id: 2,
    receiver: {
      name: 'Jane Doe',
    },
  },
] as Order[];

describe('extractOrdersOptions util', () => {
  it('should return empty array when no orders are passed', () => {
    expect(extractOrdersOptions(undefined)).toEqual([]);
  });

  it('should return array of options when orders are passed', () => {
    expect(extractOrdersOptions(mockOrdersInput)).toEqual([
      {
        value: '1',
        label: 'Pedido #1 - John Doe',
      },
      {
        value: '2',
        label: 'Pedido #2 - Jane Doe',
      },
    ]);
  });
});
