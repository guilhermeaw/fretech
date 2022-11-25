import { useNavigate } from 'react-router-dom';
import { Heading, Text } from '@chakra-ui/react';

import { OrderStatus } from '../../../models/Order';
import { OrderForm } from '../../../templates/OrderForm';
import { useCreateOrder } from '../../../services/mutations';
import { OrderFormData } from '../../../templates/OrderForm/orderValidationSchema';

const AddOrder = () => {
  const navigate = useNavigate();

  const { mutate: createOrder } = useCreateOrder({
    afterSuccess: () => navigate(-1),
  });

  const handleCreateNewOrder = async (data: OrderFormData) => {
    createOrder({ ...data, status: OrderStatus.PENDING });
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
