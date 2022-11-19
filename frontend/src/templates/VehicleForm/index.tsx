import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, HStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormContainer } from '../FormContainer';
import { FormInput } from '../../components/Form/Input';
import {
  VehicleFormData,
  vehicleValidationSchema,
} from './vehicleValidationSchema';

type VehicleFormProps = {
  onSubmit: (data: VehicleFormData) => void;
  defaultValues?: VehicleFormData;
};

export const VehicleForm = ({ onSubmit, defaultValues }: VehicleFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VehicleFormData>({
    resolver: zodResolver(vehicleValidationSchema),
    ...(defaultValues && { defaultValues }),
  });

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Modelo"
        errorMessage={errors?.model?.message}
        {...register('model')}
      />

      <FormInput
        label="Placa"
        errorMessage={errors?.plate?.message}
        {...register('plate')}
      />

      <FormInput
        label="Capacidade"
        type="number"
        errorMessage={errors?.capacity?.message}
        helpMessage="Capacidade em metros cúbicos"
        rightAddon="m³"
        {...register('capacity', { setValueAs: v => Number(v) })}
      />

      <HStack justify="flex-end" py="1rem">
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </HStack>
    </FormContainer>
  );
};
