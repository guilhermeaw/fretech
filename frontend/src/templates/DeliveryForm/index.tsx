import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormContainer } from '../FormContainer';
import { FormSelect } from '../../components/Form/Select';
import { FormActionButtons } from '../../components/FormActionButtons';
import {
  useFetchDeliverymans,
  useFetchOrders,
  useFetchVehicles,
} from '../../services/queries';

import {
  extractDeliverymansOptions,
  extractOrdersOptions,
  extractVehiclesOptions,
} from '../../utils';

import {
  DeliveryFormData,
  deliveryValidationSchema,
} from './deliveryValidationSchema';

type DeliveryFormProps = {
  onSubmit: (data: DeliveryFormData) => void;
  defaultValues?: DeliveryFormData;
};

export const DeliveryForm = ({
  onSubmit,
  defaultValues,
}: DeliveryFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryFormData>({
    resolver: zodResolver(deliveryValidationSchema),
    ...(defaultValues && { defaultValues }),
  });

  const navigate = useNavigate();

  const { data: orders } = useFetchOrders();
  const ordersOptions = extractOrdersOptions(orders);

  const { data: vehicles } = useFetchVehicles();
  const vehiclesOptions = extractVehiclesOptions(vehicles);

  const { data: deliverymans } = useFetchDeliverymans();
  const deliverymansOptions = extractDeliverymansOptions(deliverymans);

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormSelect
        label="Entregador"
        placeholder="Selecione o entregador"
        name="deliveryman"
        control={control}
        errorMessage={errors?.deliveryman?.message}
        options={deliverymansOptions}
      />

      <FormSelect
        label="Veículo"
        placeholder="Selecione o veículo"
        name="vehicle"
        control={control}
        errorMessage={errors?.vehicle?.message}
        options={vehiclesOptions}
      />

      <FormSelect
        label="Pedidos"
        placeholder="Selecione os pedidos"
        name="orders"
        control={control}
        isMulti
        errorMessage={errors?.orders?.message}
        options={ordersOptions}
      />

      <FormActionButtons onCancel={handleCancel} />
    </FormContainer>
  );
};
