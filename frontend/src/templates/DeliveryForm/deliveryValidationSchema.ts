import * as zod from 'zod';

export const deliveryValidationSchema = zod.object({
  orders: zod.array(
    zod.object(
      {
        label: zod.string(),
        value: zod.string(),
      },
      { required_error: 'Selecione um pedido' },
    ),
    { required_error: 'Selecione um pedido' },
  ),
  deliveryman: zod.object(
    {
      label: zod.string(),
      value: zod.string(),
    },
    { required_error: 'Selecione um entregador' },
  ),
  vehicle: zod.object(
    {
      label: zod.string(),
      value: zod.string(),
    },
    { required_error: 'Selecione um veículo' },
  ),
});

export type DeliveryFormData = zod.infer<typeof deliveryValidationSchema>;
