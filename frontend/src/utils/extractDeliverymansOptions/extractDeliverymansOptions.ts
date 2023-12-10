import { User } from '../../models';
import { FormSelectOption } from '../../components/Form/Select';

export const extractDeliverymansOptions = (
  deliverymans: User[] | undefined,
): FormSelectOption[] =>
  deliverymans?.map(deliveryman => ({
    value: deliveryman.id.toString(),
    label: deliveryman.name,
  })) || [];
