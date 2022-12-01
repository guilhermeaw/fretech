import { useFetchVehicles } from '../../../services/queries';
import { VehicleListItem } from '../components/VehicleListItem';
import { ListContainer } from '../../../templates/ListContainer';

const VehiclesList = () => {
  const { data: vehicles, isLoading } = useFetchVehicles();

  return (
    <ListContainer
      headerLabels={['Placa', 'Modelo', 'Capacidade', /* 'Status', */ 'Ações']}
      header={
        <ListContainer.Header
          title="Gerenciando veículos"
          subtitle="Cadastre, edite e visualize os veículos"
          addButtonLink="/veiculos/novo"
        />
      }
      hasItems={!!vehicles?.length}
      isLoading={isLoading}
    >
      {vehicles?.map(vehicle => (
        <VehicleListItem key={vehicle.id} vehicle={vehicle} />
      ))}
    </ListContainer>
  );
};

export default VehiclesList;
