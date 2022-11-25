import { useFetchOccurrences } from '../../../services/queries';
import { ListContainer } from '../../../templates/ListContainer';
import { OccurrenceListItem } from '../components/OccurrenceListItem';

const OccurrencesList = () => {
  const { data: occurrences } = useFetchOccurrences();

  return (
    <ListContainer
      headerLabels={['Pedido', 'Ocorrência', 'Criada em', 'Ações']}
      header={
        <ListContainer.Header
          title="Gerenciando ocorrências"
          subtitle="Cadastre, edite e visualize as ocorrências dos pedidos"
        />
      }
      subHeader={
        <ListContainer.SubHeader
          addButtonLink="/ocorrencias/nova"
          placeholder="Busca por ocorrências"
        />
      }
    >
      {occurrences?.map(occurrence => (
        <OccurrenceListItem key={occurrence.id} occurrence={occurrence} />
      ))}
    </ListContainer>
  );
};

export default OccurrencesList;
