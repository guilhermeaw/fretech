import { useFetchOrders } from '../../../services/queries';
import { OrdersListItem } from '../components/OrderListItem';
import { ListContainer } from '../../../templates/ListContainer';

const OrdersList = () => {
  const { data: orders } = useFetchOrders();

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
        />
      }
      subHeader={
        <ListContainer.SubHeader
          addButtonLink="/pedidos/novo"
          placeholder="Busca por pedidos"
        />
      }
    >
      {orders?.map(order => (
        <OrdersListItem key={order.id} order={order} />
      ))}
    </ListContainer>
  );
};

export default OrdersList;
