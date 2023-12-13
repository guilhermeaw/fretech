import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Divider, Heading, SimpleGrid } from '@chakra-ui/react';

import { FormContainer } from '../FormContainer';
import { FormInput } from '../../components/Form/Input';
import { FormActionButtons } from '../../components/FormActionButtons';
import { OrderFormData, orderValidationSchema } from './orderValidationSchema';

type OrderFormProps = {
  onSubmit: (data: OrderFormData) => void;
  defaultValues?: OrderFormData;
};

export const OrderForm = ({ onSubmit, defaultValues }: OrderFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderValidationSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Box mb={8}>
        <Heading fontSize="2xl">Informações do destinatário</Heading>

        <FormInput
          label="Nome"
          errorMessage={errors?.receiver?.name?.message}
          {...register('receiver.name')}
        />

        <FormInput
          label="Telefone"
          type="tel"
          errorMessage={errors?.receiver?.phone?.message}
          {...register('receiver.phone')}
        />

        <FormInput
          label="CPF"
          errorMessage={errors?.receiver?.cpf?.message}
          {...register('receiver.cpf')}
        />

        <FormInput
          type="email"
          label="E-mail"
          errorMessage={errors?.receiver?.email?.message}
          {...register('receiver.email')}
        />
      </Box>

      <Divider />

      <Box mt={8}>
        <Heading fontSize="2xl">Endereço de entrega</Heading>

        <SimpleGrid columns={[1, 2]} spacingX={4}>
          <FormInput
            label="CEP"
            errorMessage={errors?.address?.cep?.message}
            {...register('address.cep')}
          />

          <FormInput
            label="Cidade"
            errorMessage={errors?.address?.city?.message}
            {...register('address.city')}
          />

          <FormInput
            label="Estado"
            errorMessage={errors?.address?.state?.message}
            {...register('address.state')}
          />

          <FormInput
            label="Rua"
            errorMessage={errors?.address?.street?.message}
            {...register('address.street')}
          />

          <FormInput
            label="Número"
            type="number"
            errorMessage={errors?.address?.number?.message}
            {...register('address.number', {
              setValueAs: v => Number(v),
            })}
          />

          <FormInput
            label="Complemento"
            errorMessage={errors?.address?.complement?.message}
            {...register('address.complement')}
          />
        </SimpleGrid>
      </Box>

      <FormActionButtons onCancel={handleCancel} />
    </FormContainer>
  );
};
