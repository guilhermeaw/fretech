import { useFetchOrders } from '../../../services/queries';
import { OrdersListItem } from '../components/OrderListItem';
import { ListContainer } from '../../../templates/ListContainer';

const OrdersList = () => {
  const { data: orders, isLoading } = useFetchOrders();

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
        <ListContainer.Header
          title="Gerenciando pedidos"
          subtitle="Cadastre, edite e visualize os pedidos"
          addButtonLink="/pedidos/novo"
        />
      }
      hasItems={!!orders?.length}
      isLoading={isLoading}
    >
      {orders?.map(order => (
        <OrdersListItem key={order.id} order={order} />
      ))}
    </ListContainer>
  );
};

export default OrdersList;
