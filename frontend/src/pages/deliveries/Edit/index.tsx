import { Heading, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

import { useFindDeliveryById } from '../../../services/queries';
import { useUpdateDelivery } from '../../../services/mutations';
import { DeliveryForm } from '../../../templates/DeliveryForm';
import { DeliveryFormData } from '../../../templates/DeliveryForm/deliveryValidationSchema';

const EditDelivery = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deliveryId = Number(id);

  const { data: deliveryToEdit } = useFindDeliveryById({
    id: deliveryId,
  });

  const { mutate: editDelivery } = useUpdateDelivery({
    afterSuccess: () => navigate(-1),
  });

  const handleEditDelivery = async (data: DeliveryFormData) => {
    if (deliveryToEdit) {
      editDelivery({
        ...data,
        id: deliveryId,
        start_date: deliveryToEdit.start_date,
        end_date: deliveryToEdit.end_date,
        deliveryman_id: Number(data.deliveryman_id),
        orders_ids: data.orders_ids.map(id => Number(id)),
        vehicle_id: Number(data.vehicle_id),
      });
    }
  };

  return (
    <>
      <Heading fontSize="3xl">Editar ocorrência</Heading>
      <Text>Edite as informações da ocorrência</Text>

      {deliveryToEdit && (
        <DeliveryForm
          onSubmit={handleEditDelivery}
          defaultValues={{
            vehicle_id: deliveryToEdit.vehicle.id.toString(),
            deliveryman_id: deliveryToEdit.deliveryman.id.toString(),
            orders_ids: deliveryToEdit.orders.map(order => order.id.toString()),
          }}
        />
      )}
    </>
  );
};

export default EditDelivery;
