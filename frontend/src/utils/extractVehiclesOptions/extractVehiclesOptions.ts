import { Vehicle } from '../../models';
import { FormSelectOption } from '../../components/Form/Select';

export const extractVehiclesOptions = (
  vehicles: Vehicle[] | undefined,
): FormSelectOption[] =>
  vehicles?.map(vehicle => ({
    value: vehicle.id.toString(),
    label: `${vehicle.plate} - ${vehicle.model}`,
  })) || [];
