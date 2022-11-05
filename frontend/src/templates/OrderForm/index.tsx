import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Radio,
  SimpleGrid,
} from '@chakra-ui/react';

import { FormContainer } from '../FormContainer';
import { FormInput } from '../../components/Form/Input';
import { FormRadioGroup } from '../../components/Form/RadioGroup';
import { OrderStatus, OrderStatusLabel } from '../../models/Order';
import { OrderFormData, orderValidationSchema } from './orderValidationSchema';

type OrderFormProps = {
  onSubmit: (data: OrderFormData) => void;
  defaultValues?: OrderFormData;
};

export const OrderForm = ({ onSubmit, defaultValues }: OrderFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderValidationSchema),
    defaultValues: {
      status: OrderStatus.PENDING,
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
        <Heading fontSize="2xl">Status do pedido</Heading>

        <FormRadioGroup
          control={control}
          name="status"
          defaultValue={OrderStatus.PENDING}
        >
          {Object.values(OrderStatus).map(statusValue => (
            <Radio key={statusValue} value={statusValue}>
              {OrderStatusLabel[statusValue]}
            </Radio>
          ))}
        </FormRadioGroup>
      </Box>

      <Box my={8}>
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
      </Box>

      <Divider />

      <Box mt={8}>
        <Heading fontSize="2xl">Endereço de entrega</Heading>

        <SimpleGrid columns={[1, 2]} spacingX={4}>
          <FormInput
            label="CEP"
            type="number"
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

      <HStack justify="flex-end" py="1rem">
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </HStack>
    </FormContainer>
  );
};
