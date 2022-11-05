import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiEdit, FiEye, FiMoreVertical, FiTrash } from 'react-icons/fi';

import { Card } from '../../../components/Card';
import { VehicleStatusBadge } from '../VehicleStatusBadge';
import { useFetchVehicles } from '../../../services/queries';
import { ListContainer } from '../../../templates/ListContainer';

const VehiclesList = () => {
  const { data: vehicles } = useFetchVehicles();

  return (
    <ListContainer
      addButtonLink="/veiculos/novo"
      placeholder="Busca por veículos"
      subtitle="Cadastre, edite e visualize os veículos"
      title="Gerenciando veículos"
      headerLabels={['Placa', 'Modelo', 'Capacidade', 'Status', 'Ações']}
    >
      {vehicles?.map(({ id, model, plate, capacity, status }) => (
        <Card key={id}>
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
                {/* <MenuItem
                  as={Link}
                  to={`/veiculos/editar/${id}`}
                  icon={<FiEdit color="blue" />}
                >
                  Editar
                </MenuItem> */}
                {/* <MenuItem icon={<FiTrash color="red" />}>Excluir</MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
        </Card>
      ))}
    </ListContainer>
  );
};

export default VehiclesList;
