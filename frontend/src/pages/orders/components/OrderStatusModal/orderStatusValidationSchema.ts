import * as zod from 'zod';

import { OrderStatus } from '../../../../models/Order';

export const orderStatusValidationSchema = zod.object({
  status: zod.nativeEnum(OrderStatus, {
    required_error: 'Selecione um status',
  }),
});

export type OrderStatusFormData = zod.infer<typeof orderStatusValidationSchema>;
