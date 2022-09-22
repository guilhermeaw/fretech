import * as zod from 'zod';

export const newDeliverymanValidationSchema = zod.object({
  name: zod
    .string()
    .min(3, 'Informe o nome completo')
    .max(100, 'Nome muito longo'),
  email: zod.string().email('Informe um e-mail válido'),
  password: zod.string().min(6, 'Senha muito curta'),
  phone: zod.string().min(10, 'Informe o DDD e o número do telefone'),
});

export type NewDeliverymanFormData = zod.infer<
  typeof newDeliverymanValidationSchema
>;
