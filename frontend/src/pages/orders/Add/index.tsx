import { useNavigate } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/react';

import { OrderForm } from '../../../templates/OrderForm';
import { OrderFormData } from '../../../templates/OrderForm/orderValidationSchema';

const AddOrder = () => {
  const navigate = useNavigate();

  // const { mutate: createDeliveryman } = useCreateDeliveryman({
  //   afterSuccess: () => navigate(-1),
  // });

  const handleCreateNewOrder = async (data: OrderFormData) => {
    console.log({ data });
  };

  return (
    <>
      <Heading fontSize="3xl">Cadastro de pedidos</Heading>
      <Text>Cadastre novos pedidos no sistema</Text>

      <OrderForm onSubmit={handleCreateNewOrder} />
    </>
  );
};

export default AddOrder;
