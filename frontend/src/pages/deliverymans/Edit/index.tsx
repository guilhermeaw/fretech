import { useNavigate, useParams } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/react';

import { DeliveryForm } from '../../../templates/DeliverymanForm';
import { useFindDeliverymanById } from '../../../services/queries';
import { useUpdateDeliveryman } from '../../../services/mutations';
import { DeliverymanFormData } from '../../../templates/DeliverymanForm/useDeliverymanValidationSchema';

const EditDeliveryman = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const deliverymanId = Number(id);

  const { data: deliverymanToEdit } = useFindDeliverymanById({
    id: deliverymanId,
  });

  const { mutate: editDeliveryman } = useUpdateDeliveryman({
    afterSuccess: () => navigate(-1),
  });

  const handleEditDeliveryman = async (data: DeliverymanFormData) => {
    editDeliveryman({ ...data, id: deliverymanId });
  };

  return (
    <>
      <Heading fontSize="3xl">Editar entregador</Heading>
      <Text>Edite as informações do entregador</Text>

      {deliverymanToEdit && (
        <DeliveryForm
          onSubmit={handleEditDeliveryman}
          defaultValues={{
            name: deliverymanToEdit.name,
            email: deliverymanToEdit.email,
            password: '',
            phone: deliverymanToEdit.phone,
          }}
        />
      )}
    </>
  );
};

export default EditDeliveryman;
