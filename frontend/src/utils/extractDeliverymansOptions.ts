import { User } from '../models/User';
import { FormSelectOption } from '../components/Form/Select';

export const extractDeliverymansOptions = (
  deliverymans: User[] | undefined,
): FormSelectOption[] =>
  deliverymans?.map(deliveryman => ({
    value: deliveryman.id.toString(),
    label: deliveryman.name,
  })) || [];
