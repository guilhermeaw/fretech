import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormContainer } from '../FormContainer';
import { FormInput } from '../../components/Form/Input';
import { FormActionButtons } from '../../components/FormActionButtons';
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

      <FormActionButtons onCancel={handleCancel} />
    </FormContainer>
  );
};
