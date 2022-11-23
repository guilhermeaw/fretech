import { useParams } from 'react-router-dom';

import { HStack } from '@chakra-ui/react';
import { useFindDeliveryById } from '../../../services/queries';
import { DeliveryStatusButtons } from './DeliveryStatusButtons';
import { ListContainer } from '../../../templates/ListContainer';
import { OrdersListItem } from '../../orders/components/OrderListItem';

export const ManageDelivery = () => {
  const { id } = useParams();
  const deliveryId = Number(id);

  const { data: deliveryToManage } = useFindDeliveryById({
    id: deliveryId,
  });

  if (!deliveryToManage) {
    return null;
  }

  return (
    <ListContainer
      headerLabels={[
        'ID',
        'Destinatário',
        'Cidade',
        'Estado',
        'Status',
        'Ações',
      ]}
      header={
        <HStack justify="space-between">
          <ListContainer.Header
            title="Controlar entrega"
            subtitle="Controle a entrega e seus pedidos"
          />
          <DeliveryStatusButtons delivery={deliveryToManage} />
        </HStack>
      }
    >
      {deliveryToManage?.orders.map(order => (
        <OrdersListItem key={order.id} order={order} />
      ))}
    </ListContainer>
  );
};