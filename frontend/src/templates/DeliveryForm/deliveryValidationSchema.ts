import * as zod from 'zod';

export const deliveryValidationSchema = zod.object({
  orders_ids: zod
    .array(zod.string(), {
      required_error: 'Selecione pelo menos um pedido',
    })
    .min(1, 'Selecione pelo menos um pedido'),
  deliveryman_id: zod.string({ required_error: 'Selecione um entregador' }),
  vehicle_id: zod.string({ required_error: 'Selecione um veículo' }),
});

export type DeliveryFormData = zod.infer<typeof deliveryValidationSchema>;
