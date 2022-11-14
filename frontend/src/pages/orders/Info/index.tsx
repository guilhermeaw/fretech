import { useParams } from 'react-router-dom';
import { Accordion, Heading, Text } from '@chakra-ui/react';

import { GeneralSection } from './GeneralSection';
import { AddressSection } from './AddressSection';
import { ReceiverSection } from './ReceiverSection';
import { useFindOrderById } from '../../../services/queries';

const OrderInfo = () => {
  const { id: orderId } = useParams();
  const { data: order } = useFindOrderById({ id: Number(orderId) });

  return (
    <>
      <Heading fontSize="3xl">Pedido #{orderId}</Heading>
      <Text>Expanda as seções para visualizar as informações do pedido</Text>

      {order && (
        <Accordion
          bg="white"
          p="4"
          mt="4"
          borderRadius={8}
          defaultIndex={[0, 1, 2]}
          allowMultiple
        >
          <GeneralSection id={order.id} status={order.status} />
          <AddressSection address={order.address} />
          <ReceiverSection receiver={order.receiver} />
        </Accordion>
      )}
    </>
  );
};

export default OrderInfo;
