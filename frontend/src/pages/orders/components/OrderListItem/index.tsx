import { Link } from 'react-router-dom';
import { FiEdit, FiEye, FiMoreVertical } from 'react-icons/fi';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

import { Order } from '../../../../models/Order';
import { Card } from '../../../../components/Card';
import { OrderStatusBadge } from '../OrderStatusBadge';

type OrdersListItemProps = {
  order: Order;
};

export const OrdersListItem = ({ order }: OrdersListItemProps) => {
  const { address, id, receiver, status } = order;

  return (
    <Card>
      <Text>{`#${id}`}</Text>
      <Text>{receiver.name}</Text>
      <Text>{address.city}</Text>
      <Text>{address.state}</Text>
      <OrderStatusBadge status={status} />

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
              to={`/pedidos/${id}`}
              icon={<FiEye color="purple" />}
            >
              Visualizar
            </MenuItem>
            <MenuItem
              as={Link}
              to={`/pedidos/editar/${id}`}
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
