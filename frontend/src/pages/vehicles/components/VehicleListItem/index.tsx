import { Link } from 'react-router-dom';
import { FiEdit, FiMoreVertical, FiTrash } from 'react-icons/fi';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { Card } from '../../../../components/Card';
import { Vehicle } from '../../../../models/Vehicle';
import { VehicleStatusBadge } from '../VehicleStatusBadge';
import { AlertDialog } from '../../../../components/AlertDialog';
import { useDeleteVehicle } from '../../../../services/mutations';

type VehicleListItemProps = {
  vehicle: Vehicle;
};

export const VehicleListItem = ({ vehicle }: VehicleListItemProps) => {
  const { id, model, plate, capacity, status } = vehicle;

  const {
    isOpen: isOpenVehicleDelete,
    onClose: onCloseVehicleDelete,
    onOpen: onOpenVehicleDelete,
  } = useDisclosure();

  const { mutate: deleteVehicle } = useDeleteVehicle({});

  const handleDeleteVehicle = () => {
    deleteVehicle(id);
    onCloseVehicleDelete();
  };

  return (
    <>
      <Card>
        <Text>{plate}</Text>
        <Text>{model}</Text>
        <Text>
          {`${capacity} m`}
          <sup>3</sup>
        </Text>
        <VehicleStatusBadge status={status} />

        <Box display="flex" justifyContent="flex-end">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Ações"
              variant="ghost"
              icon={<FiMoreVertical />}
            />
            <MenuList>
              <MenuItem
                as={Link}
                to={`/veiculos/editar/${id}`}
                icon={<FiEdit color="blue" />}
              >
                Editar
              </MenuItem>
              <MenuItem
                icon={<FiTrash color="red" />}
                onClick={onOpenVehicleDelete}
              >
                Excluir
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Card>

      <AlertDialog
        title={`Remover veículo ${model}`}
        description="Tem certeza que deseja remover este veículo?"
        isOpen={isOpenVehicleDelete}
        onClose={onCloseVehicleDelete}
        afterConfirm={handleDeleteVehicle}
      />
    </>
  );
};
