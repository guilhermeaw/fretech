import { ListContainer } from '../../../templates/ListContainer';
import { useFetchDeliverymans } from '../../../services/queries';
import { DeliverymansListItem } from '../components/DeliverymanListItem';

const DeliverymansList = () => {
  const { data: deliverymans } = useFetchDeliverymans();

  return (
    <ListContainer
      headerLabels={['ID', 'Foto', 'Nome', 'Email', 'Ações']}
      header={
        <ListContainer.Header
          title="Gerenciando entregadores"
          subtitle="Cadastre, edite e visualize os entregadores"
        />
      }
      subHeader={
        <ListContainer.SubHeader
          addButtonLink="/entregadores/novo"
          placeholder="Busca por entregadores"
        />
      }
    >
      {deliverymans?.map(deliveryman => (
        <DeliverymansListItem key={deliveryman.id} deliveryman={deliveryman} />
      ))}
    </ListContainer>
  );
};

export default DeliverymansList;
