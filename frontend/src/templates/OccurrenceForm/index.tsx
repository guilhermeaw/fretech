import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormContainer } from '../FormContainer';
import { extractOrdersOptions } from '../../utils';
import { FormInput } from '../../components/Form/Input';
import { useFetchOrders } from '../../services/queries';
import { FormSelect } from '../../components/Form/Select';
import { FormTextarea } from '../../components/Form/Textarea';
import { FormActionButtons } from '../../components/FormActionButtons';
import {
  OccurrenceFormData,
  occurrenceValidationSchema,
} from './occurrenceValidationSchema';

type OccurrenceFormProps = {
  onSubmit: (data: OccurrenceFormData) => void;
  defaultValues?: OccurrenceFormData;
};

export const OccurrenceForm = ({
  onSubmit,
  defaultValues,
}: OccurrenceFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OccurrenceFormData>({
    resolver: zodResolver(occurrenceValidationSchema),
    ...(defaultValues && { defaultValues }),
  });

  const navigate = useNavigate();

  const { data: orders } = useFetchOrders();
  const ordersOptions = extractOrdersOptions(orders);

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormSelect
        label="Pedido"
        placeholder="Selecione um pedido"
        name="order_id"
        control={control}
        errorMessage={errors?.order_id?.message}
        options={ordersOptions}
      />

      <FormInput
        label="Ocorrência"
        errorMessage={errors?.name?.message}
        {...register('name')}
      />

      <FormTextarea
        label="Descrição"
        errorMessage={errors?.description?.message}
        {...register('description')}
      />

      <FormActionButtons onCancel={handleCancel} />
    </FormContainer>
  );
};
