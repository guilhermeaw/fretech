import { User } from '../../models';
import { extractDeliverymansOptions } from './extractDeliverymansOptions';

const mockDeliverymansInput = [
  {
    id: 1,
    name: 'Deliveryman 1',
  },
  {
    id: 2,
    name: 'Deliveryman 2',
  },
] as User[];

describe('extractDeliverymansOptions util', () => {
  it('should return an empty array when deliverymans is undefined', () => {
    expect(extractDeliverymansOptions(undefined)).toEqual([]);
  });

  it('should return an empty array when deliverymans is an empty array', () => {
    expect(extractDeliverymansOptions([])).toEqual([]);
  });

  it('should return an array with options when deliverymans is passed', () => {
    expect(extractDeliverymansOptions(mockDeliverymansInput)).toEqual([
      {
        value: '1',
        label: 'Deliveryman 1',
      },
      {
        value: '2',
        label: 'Deliveryman 2',
      },
    ]);
  });
});
