import { Link } from 'react-router-dom';
import { FiEdit, FiEye, FiMoreVertical, FiTrash } from 'react-icons/fi';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Card } from '../../../components/Card';
import { formatDateTime } from '../../../utils';
import { Order, OrderStatus } from '../../../models/Order';
import { useFetchDeliveries } from '../../../services/queries';
import { ListContainer } from '../../../templates/ListContainer';
import { DeliveryProgress } from '../components/DeliveryProgress';

const DeliveriesList = () => {
  const { data: deliveries } = useFetchDeliveries();

  const getProgressValue = (orders: Order[]) => {
    const finishedStatuses = [OrderStatus.DELIVERED, OrderStatus.CANCELED];

    const total = orders.length;
    const finished = orders.filter(order =>
      finishedStatuses.includes(order.status),
    ).length;

    return (finished / total) * 100;
  };

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
      {deliveries?.map(({ id, start_date, vehicle, orders, deliveryman }) => (
        <Card key={id}>
          <DeliveryProgress value={getProgressValue(orders)} />

          <Stack direction="row" align="center">
            <Avatar name={deliveryman.name} />
            <Text>{deliveryman.name}</Text>
          </Stack>

          <Text>{vehicle.model}</Text>
          <Text>{`${orders.length} pedido${
            orders.length > 1 ? 's' : ''
          }`}</Text>
          <Text>{formatDateTime(start_date)}</Text>

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

export default DeliveriesList;
