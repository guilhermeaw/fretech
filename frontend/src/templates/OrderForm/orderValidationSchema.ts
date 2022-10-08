import * as zod from 'zod';

import { OrderStatus } from '../../models/Order';

export const orderValidationSchema = zod.object({
  status: zod.nativeEnum(OrderStatus),
  receiver: zod.object({
    name: zod
      .string()
      .min(3, 'Informe o nome completo')
      .max(100, 'Nome muito longo'),
    phone: zod.string().min(11, 'Informe o DDD e o número do telefone'),
    cpf: zod
      .string()
      .min(11, 'Informe um CPF válido')
      .max(11, 'Informe um CPF válido')
      .refine(
        val =>
          /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/.test(
            val,
          ),
        { message: 'Informe um CPF válido' },
      ),
  }),
  address: zod.object({
    cep: zod.string().min(8, 'Informe um CEP válido'),
    city: zod.string().min(3, 'Nome de cidade muito curto'),
    state: zod.string().min(2, 'Nome de estado muito curto'),
    street: zod.string().min(3, 'Nome de rua muito curto'),
    number: zod.number().min(1, 'Número inválido'),
    complement: zod.string().optional(),
  }),
});

export type OrderFormData = zod.infer<typeof orderValidationSchema>;
