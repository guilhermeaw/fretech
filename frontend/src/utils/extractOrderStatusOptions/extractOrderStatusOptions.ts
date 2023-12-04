import { FormSelectOption } from '../../components/Form/Select';
import { OrderStatus, OrderStatusLabel } from '../../models';

export const extractOrderStatusOptions = (): FormSelectOption[] =>
  Object.values(OrderStatus).map(statusValue => ({
    value: statusValue,
    label: OrderStatusLabel[statusValue],
  }));
