import * as zod from 'zod';

export const orderValidationSchema = zod.object({
  status: zod.enum([
    'PENDING',
    'IN_PROGRESS',
    'DELIVERED',
    'CANCELED',
    'WITHDRAWN',
  ]),
  name: zod
    .string()
    .min(3, 'Informe o nome completo')
    .max(100, 'Nome muito longo'),
  phone: zod.string().min(11, 'Informe o DDD e o número do telefone'),
  cpf: zod.string().min(11, 'Informe um CPF válido'),
  cep: zod.string().min(8, 'Informe um CEP válido'),
  city: zod.string().min(3, 'Nome de cidade muito curto'),
  state: zod.string().min(2, 'Nome de estado muito curto'),
  street: zod.string().min(3, 'Nome de rua muito curto'),
  number: zod.number().min(1, 'Número inválido'),
  complement: zod.string().optional(),
});

export type OrderFormData = zod.infer<typeof orderValidationSchema>;
