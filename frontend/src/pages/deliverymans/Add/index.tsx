import { useNavigate } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/react';

import { DeliveryForm } from '../../../templates/DeliverymanForm';
import { useCreateDeliveryman } from '../../../services/mutations';
import { DeliverymanFormData } from '../../../templates/DeliverymanForm/useDeliverymanValidationSchema';

const AddDeliveryman = () => {
  const navigate = useNavigate();

  const { mutate: createDeliveryman } = useCreateDeliveryman({
    afterSuccess: () => navigate(-1),
  });

  const handleCreateNewDeliveryman = async (data: DeliverymanFormData) => {
    createDeliveryman(data);
  };

  return (
    <>
      <Heading fontSize="3xl">Cadastro de entregadores</Heading>
      <Text>Cadastre novos entregadores para envio das encomendas</Text>

      <DeliveryForm onSubmit={handleCreateNewDeliveryman} />
    </>
  );
};

export default AddDeliveryman;
