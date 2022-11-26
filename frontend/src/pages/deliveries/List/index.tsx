import { useFetchDeliveries } from '../../../services/queries';
import { ListContainer } from '../../../templates/ListContainer';
import { DeliveryListItem } from '../components/DeliveryListItem';

const DeliveriesList = () => {
  const { data: deliveries, isLoading } = useFetchDeliveries();

  return (
    <ListContainer
      headerLabels={[
        'Andamento',
        'Entregador',
        'Veículo',
        'Pedidos',
        'Saída',
        'Ações',
      ]}
      header={
        <ListContainer.Header
          title="Gerenciando entregas"
          subtitle="Cadastre, edite e visualize as entregas"
        />
      }
      subHeader={
        <ListContainer.SubHeader
          addButtonLink="/entregas/nova"
          placeholder="Busca por entregas"
        />
      }
      hasItems={!!deliveries?.length}
      isLoading={isLoading}
    >
      {deliveries?.map(delivery => (
        <DeliveryListItem key={delivery.id} delivery={delivery} />
      ))}
    </ListContainer>
  );
};

export default DeliveriesList;
