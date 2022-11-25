import { useForm } from 'react-hook-form';
import { Avatar, Center } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';

import { FormContainer } from '../FormContainer';
import { FormInput } from '../../components/Form/Input';
import { FormActionButtons } from '../../components/FormActionButtons';
import {
  DeliverymanFormData,
  useDeliverymanValidationSchema,
} from './useDeliverymanValidationSchema';

type DeliverymanFormProps = {
  onSubmit: (data: DeliverymanFormData) => void;
  defaultValues?: DeliverymanFormData;
};

export const DeliverymanForm = ({
  onSubmit,
  defaultValues,
}: DeliverymanFormProps) => {
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
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
        isDisabled={!isNewDeliveryman}
        {...register('email')}
      />

      {isNewDeliveryman && (
        <FormInput
          label="Senha"
          type="password"
          errorMessage={errors?.password?.message}
          {...register('password')}
        />
      )}

      <FormInput
        label="Telefone"
        type="tel"
        errorMessage={errors?.phone?.message}
        {...register('phone')}
      />

      <FormActionButtons onCancel={handleCancel} />
    </FormContainer>
  );
};
