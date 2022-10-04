import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';

import { FormInput } from '../../components/Form/FormInput';
import { OrderStatus, OrderStatusLabel } from '../../models/Order';
import { OrderFormData, orderValidationSchema } from './orderValidationSchema';

type OrderFormProps = {
  onSubmit: (data: OrderFormData) => void;
  defaultValues?: OrderFormData;
};

export const OrderForm = ({ onSubmit, defaultValues }: OrderFormProps) => {
  const {
    register,
    handleSubmit,
    control,
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
    <form
      style={{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: '1rem',
        margin: '1rem 0',
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box mb={8}>
        <Heading fontSize="2xl">Status do pedido</Heading>

        <Controller
          name="status"
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              onChange={onChange}
              value={value}
              defaultValue={OrderStatus.PENDING}
            >
              <Stack direction={['column', 'row']} my="4" spacing={4}>
                {Object.values(OrderStatus).map(statusValue => (
                  <Radio key={statusValue} value={statusValue}>
                    {OrderStatusLabel[statusValue]}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          )}
        />
      </Box>

      <Box my={8}>
        <Heading fontSize="2xl">Informações do destinatário</Heading>

        <FormInput
          label="Nome"
          errorMessage={errors?.name?.message}
          {...register('name')}
        />

        <FormInput
          label="Telefone"
          type="tel"
          errorMessage={errors?.phone?.message}
          {...register('phone')}
        />

        <FormInput
          label="CPF"
          type="number"
          errorMessage={errors?.cpf?.message}
          {...register('cpf')}
        />
      </Box>

      <Divider />

      <Box mt={8}>
        <Heading fontSize="2xl">Endereço de entrega</Heading>

        <SimpleGrid columns={[1, 2]} spacingX={4}>
          <FormInput
            label="CEP"
            type="number"
            errorMessage={errors?.cep?.message}
            {...register('cep')}
          />

          <FormInput
            label="Cidade"
            errorMessage={errors?.city?.message}
            {...register('city')}
          />

          <FormInput
            label="Estado"
            errorMessage={errors?.state?.message}
            {...register('state')}
          />

          <FormInput
            label="Rua"
            errorMessage={errors?.street?.message}
            {...register('street')}
          />

          <FormInput
            label="Número"
            type="number"
            errorMessage={errors?.number?.message}
            {...register('number', {
              setValueAs: v => Number(v),
            })}
          />

          <FormInput
            label="Complemento"
            errorMessage={errors?.complement?.message}
            {...register('complement')}
          />
        </SimpleGrid>
      </Box>

      <HStack justify="flex-end" py="1rem">
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </HStack>
    </form>
  );
};
