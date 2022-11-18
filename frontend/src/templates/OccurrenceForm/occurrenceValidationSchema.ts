import * as zod from 'zod';

export const occurrenceValidationSchema = zod.object({
  name: zod.string().min(1, 'Informe o nome da ocorrência'),
  description: zod.string().min(1, 'Informe a descrição da ocorrência'),
  order_id: zod.string().min(1, 'Selecione um pedido'),
});

export type OccurrenceFormData = zod.infer<typeof occurrenceValidationSchema>;
