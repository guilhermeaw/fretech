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
} from '@chakra-ui/react';

import { Card } from '../../../../components/Card';
import { Vehicle } from '../../../../models/Vehicle';
import { VehicleStatusBadge } from '../VehicleStatusBadge';

type VehicleListItemProps = {
  vehicle: Vehicle;
  onDelete: (vehicle: Vehicle) => void;
};

export const VehicleListItem = ({
  vehicle,
  onDelete,
}: VehicleListItemProps) => {
  const { id, model, plate, capacity, status } = vehicle;

  return (
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
              onClick={() => onDelete(vehicle)}
            >
              Excluir
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Card>
  );
};
