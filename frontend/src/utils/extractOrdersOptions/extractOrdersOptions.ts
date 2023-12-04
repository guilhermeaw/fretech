import { Order } from '../../models/Order';
import { FormSelectOption } from '../../components/Form/Select';

export const extractOrdersOptions = (
  orders: Order[] | undefined,
): FormSelectOption[] =>
  orders?.map(order => ({
    value: order.id.toString(),
    label: `Pedido #${order.id} - ${order.receiver.name}`,
  })) || [];
