import * as zod from 'zod';

const deliverymanValidationSchema = zod.object({
  name: zod
    .string()
    .min(3, 'Informe o nome completo')
    .max(100, 'Nome muito longo'),
  email: zod.string().email('Informe um e-mail válido'),
  password: zod.string().min(6, 'Senha muito curta'),
  phone: zod.string().min(11, 'Informe o DDD e o número do telefone'),
});

export type DeliverymanFormData = zod.infer<typeof deliverymanValidationSchema>;

export const useDeliverymanValidationSchema = ({
  type = 'create',
}: {
  type: 'create' | 'update';
}) => {
  const isNewDeliveryman = type === 'create';

  return {
    deliverymanValidationSchema: isNewDeliveryman
      ? deliverymanValidationSchema
      : deliverymanValidationSchema.omit({ password: true }),
  };
};
