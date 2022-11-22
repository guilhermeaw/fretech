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

import { FiEdit, FiMoreVertical } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/Card';
import { formatDateTime } from '../../../../utils';
import { Delivery } from '../../../../models/Delivery';
import { OrderStatus } from '../../../../models/Order';
import { DeliveryProgress } from '../DeliveryProgress';

type DeliveryListItemProps = {
  delivery: Delivery;
};

export const DeliveryListItem = ({ delivery }: DeliveryListItemProps) => {
  const { orders, deliveryman, vehicle, start_date } = delivery;

  const getProgressValue = () => {
    const finishedStatuses = [OrderStatus.DELIVERED, OrderStatus.CANCELED];

    const total = orders.length;
    const finished = orders.filter(order =>
      finishedStatuses.includes(order.status),
    ).length;

    return (finished / total) * 100;
  };

  return (
    <Card>
      <DeliveryProgress value={getProgressValue()} />

      <Stack direction="row" align="center">
        <Avatar name={deliveryman.name} />
        <Text>{deliveryman.name}</Text>
      </Stack>

      <Text>{vehicle.model}</Text>
      <Text>{`${orders.length} pedido${orders.length > 1 ? 's' : ''}`}</Text>
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
            <MenuItem
              as={Link}
              to={`/entregas/editar/${delivery.id}`}
              icon={<FiEdit color="blue" />}
            >
              Editar
            </MenuItem>
            {/* <MenuItem icon={<FiTrash color="red" />}>Excluir</MenuItem> */}
          </MenuList>
        </Menu>
      </Box>
    </Card>
  );
};
