import * as zod from 'zod';

export const occurrenceValidationSchema = zod.object({
  name: zod.string().min(1, 'Informe o nome da ocorrência'),
  description: zod.string().min(1, 'Informe a descrição da ocorrência'),
  order: zod.object(
    {
      label: zod.string(),
      value: zod.string(),
    },
    { required_error: 'Selecione um pedido' },
  ),
});

export type OccurrenceFormData = zod.infer<typeof occurrenceValidationSchema>;
