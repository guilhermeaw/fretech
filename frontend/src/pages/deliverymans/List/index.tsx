import { ListContainer } from '../../../templates/ListContainer';
import { useFetchDeliverymans } from '../../../services/queries';
import { DeliverymansListItem } from '../components/DeliverymanListItem';

const DeliverymansList = () => {
  const { data: deliverymans, isLoading } = useFetchDeliverymans();

  return (
    <ListContainer
      headerLabels={['ID', 'Foto', 'Nome', 'Email', 'Ações']}
      header={
        <ListContainer.Header
          title="Gerenciando entregadores"
          subtitle="Cadastre, edite e visualize os entregadores"
          addButtonLink="/entregadores/novo"
        />
      }
      hasItems={!!deliverymans?.length}
      isLoading={isLoading}
    >
      {deliverymans?.map(deliveryman => (
        <DeliverymansListItem key={deliveryman.id} deliveryman={deliveryman} />
      ))}
    </ListContainer>
  );
};

export default DeliverymansList;
