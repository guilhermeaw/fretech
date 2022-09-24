import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Button, Center, HStack } from '@chakra-ui/react';

import { FormInput } from '../../components/Form/FormInput';
import {
  DeliverymanFormData,
  useDeliverymanValidationSchema,
} from './useDeliverymanValidationSchema';

type DeliveryFormProps = {
  onSubmit: (data: DeliverymanFormData) => void;
  defaultValues?: DeliverymanFormData;
};

export const DeliveryForm = ({
  onSubmit,
  defaultValues,
}: DeliveryFormProps) => {
  const { pathname } = useLocation();
  const isNewDeliveryman = pathname.includes('novo');

  const { deliverymanValidationSchema } = useDeliverymanValidationSchema({
    type: isNewDeliveryman ? 'create' : 'update',
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliverymanFormData>({
    resolver: zodResolver(deliverymanValidationSchema),
    ...(defaultValues && { defaultValues }),
  });

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const name = watch('name');

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
      <Center>
        <Avatar name={name} size="2xl" />
      </Center>

      <FormInput
        label="Nome"
        errorMessage={errors?.name?.message}
        {...register('name')}
      />

      <FormInput
        label="E-mail"
        type="email"
        errorMessage={errors?.email?.message}
        {...register('email')}
      />

      <FormInput
        label="Senha"
        type="password"
        errorMessage={errors?.password?.message}
        {...register('password')}
      />

      <FormInput
        label="Telefone"
        type="tel"
        errorMessage={errors?.phone?.message}
        {...register('phone')}
      />

      <HStack justify="flex-end" py="1rem">
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </HStack>
    </form>
  );
};
