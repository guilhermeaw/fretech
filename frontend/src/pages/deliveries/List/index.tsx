import { useFetchDeliveries } from '../../../services/queries';
import { ListContainer } from '../../../templates/ListContainer';
import { DeliveryListItem } from '../components/DeliveryListItem';

const DeliveriesList = () => {
  const { data: deliveries } = useFetchDeliveries();

  return (
    <ListContainer
      addButtonLink="/entregas/nova"
      placeholder="Busca por entregas"
      subtitle="Cadastre, edite e visualize as entregas"
      title="Gerenciando entregas"
      headerLabels={[
        'Andamento',
        'Entregador',
        'Veículo',
        'Pedidos',
        'Saída',
        'Ações',
      ]}
    >
      {deliveries?.map(delivery => (
        <DeliveryListItem key={delivery.id} delivery={delivery} />
      ))}
    </ListContainer>
  );
};

export default DeliveriesList;
