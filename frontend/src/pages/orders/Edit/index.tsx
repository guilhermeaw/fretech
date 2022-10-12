import { Heading, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

import { OrderForm } from '../../../templates/OrderForm';
import { useFindOrderById } from '../../../services/queries';
import { useUpdateOrder } from '../../../services/mutations';
import { OrderFormData } from '../../../templates/OrderForm/orderValidationSchema';

const EditOrder = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const orderId = Number(id);

  const { data: orderToEdit } = useFindOrderById({
    id: orderId,
  });

  const { mutate: editOrder } = useUpdateOrder({
    afterSuccess: () => navigate(-1),
  });

  const handleEditOrder = async (data: OrderFormData) => {
    editOrder({ ...data, id: orderId });
  };

  return (
    <>
      <Heading fontSize="3xl">Editar pedido</Heading>
      <Text>Edite as informações do pedido</Text>

      {orderToEdit && (
        <OrderForm
          onSubmit={handleEditOrder}
          defaultValues={{
            ...orderToEdit,
          }}
        />
      )}
    </>
  );
};

export default EditOrder;
