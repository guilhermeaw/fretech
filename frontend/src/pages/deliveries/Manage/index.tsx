import { HStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

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

  const isActiveDelivery =
    !!deliveryToManage.start_date && !deliveryToManage.end_date;

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
            title="Controlar pedidos da entrega"
            subtitle="Para atualizar o status dos pedidos, a entrega deve estar em andamento"
          />
          <DeliveryStatusButtons delivery={deliveryToManage} />
        </HStack>
      }
    >
      {deliveryToManage?.orders.map(order => (
        <OrdersListItem
          key={order.id}
          order={order}
          canUpdateStatus={isActiveDelivery}
          canDeleteOrder={false}
        />
      ))}
    </ListContainer>
  );
};
