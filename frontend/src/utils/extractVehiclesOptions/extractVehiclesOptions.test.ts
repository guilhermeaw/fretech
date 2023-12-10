import { Vehicle } from '../../models';
import { extractVehiclesOptions } from './extractVehiclesOptions';

const mockVehiclesInput = [
  {
    id: 1,
    plate: 'ABC-1234',
    model: 'Model 1',
  },
  {
    id: 2,
    plate: 'DEF-5678',
    model: 'Model 2',
  },
] as Vehicle[];

describe('extractVehiclesOptions util', () => {
  it('should return empty array when no vehicles are passed', () => {
    expect(extractVehiclesOptions(undefined)).toEqual([]);
  });

  it('should return array of options when vehicles are passed', () => {
    expect(extractVehiclesOptions(mockVehiclesInput)).toEqual([
      {
        value: '1',
        label: 'ABC-1234 - Model 1',
      },
      {
        value: '2',
        label: 'DEF-5678 - Model 2',
      },
    ]);
  });
});
