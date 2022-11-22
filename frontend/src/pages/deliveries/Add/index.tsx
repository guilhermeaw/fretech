import { useNavigate } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/react';

import { DeliveryForm } from '../../../templates/DeliveryForm';
import { useCreateDelivery } from '../../../services/mutations';
import { DeliveryFormData } from '../../../templates/DeliveryForm/deliveryValidationSchema';

const AddDelivery = () => {
  const navigate = useNavigate();

  const { mutate: createDelivery } = useCreateDelivery({
    afterSuccess: () => navigate(-1),
  });

  const handleCreateNewDelivery = async (data: DeliveryFormData) => {
    createDelivery({
      vehicle_id: Number(data.vehicle_id),
      deliveryman_id: Number(data.deliveryman_id),
      orders_ids: data.orders_ids.map(order => Number(order)),
    });
  };

  return (
    <>
      <Heading fontSize="3xl">Cadastro de entregas</Heading>
      <Text>Cadastre novas entregas</Text>

      <DeliveryForm onSubmit={handleCreateNewDelivery} />
    </>
  );
};

export default AddDelivery;
