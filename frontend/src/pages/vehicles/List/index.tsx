import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { Vehicle } from '../../../models/Vehicle';
import { useFetchVehicles } from '../../../services/queries';
import { AlertDialog } from '../../../components/AlertDialog';
import { VehicleListItem } from '../components/VehicleListItem';
import { ListContainer } from '../../../templates/ListContainer';
import { useDeleteVehicle } from '../../../services/mutations';

const VehiclesList = () => {
  const [openedVehicle, setOpenedVehicle] = useState({} as Vehicle);
  const {
    isOpen: isOpenVehicleDelete,
    onClose: onCloseVehicleDelete,
    onOpen: onOpenVehicleDelete,
  } = useDisclosure();

  const { data: vehicles } = useFetchVehicles();
  const { mutate: deleteVehicle } = useDeleteVehicle({});

  const handleOpenToDeleteVehicle = (vehicle: Vehicle) => {
    onOpenVehicleDelete();
    setOpenedVehicle(vehicle);
  };

  const handleDeleteOpenedVehicle = () => {
    deleteVehicle(openedVehicle.id);
    onCloseVehicleDelete();
  };

  return (
    <>
      <ListContainer
        headerLabels={['Placa', 'Modelo', 'Capacidade', 'Status', 'Ações']}
        header={
          <ListContainer.Header
            title="Gerenciando veículos"
            subtitle="Cadastre, edite e visualize os veículos"
          />
        }
        subHeader={
          <ListContainer.SubHeader
            addButtonLink="/veiculos/novo"
            placeholder="Busca por veículos"
          />
        }
      >
        {vehicles?.map(vehicle => (
          <VehicleListItem
            key={vehicle.id}
            vehicle={vehicle}
            onDelete={() => handleOpenToDeleteVehicle(vehicle)}
          />
        ))}
      </ListContainer>

      <AlertDialog
        title="Remover veículo"
        description="Tem certeza que deseja remover este veículo?"
        isOpen={isOpenVehicleDelete}
        onClose={onCloseVehicleDelete}
        afterConfirm={handleDeleteOpenedVehicle}
      />
    </>
  );
};

export default VehiclesList;
