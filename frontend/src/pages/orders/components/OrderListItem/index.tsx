import { Link } from 'react-router-dom';
import { FiEdit, FiEye, FiMoreVertical, FiTruck } from 'react-icons/fi';
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

import { Order } from '../../../../models/Order';
import { Card } from '../../../../components/Card';
import { OrderStatusBadge } from '../OrderStatusBadge';
import { OrderStatusModal } from '../OrderStatusModal';

type OrdersListItemProps = {
  order: Order;
  canUpdateStatus?: boolean;
};

export const OrdersListItem = ({
  order,
  canUpdateStatus = false,
}: OrdersListItemProps) => {
  const { address, id, receiver, status } = order;

  const {
    isOpen: isOpenOrderStatusModal,
    onClose: onCloseOrderStatusModal,
    onOpen: onOpenOrderStatusModal,
  } = useDisclosure();

  return (
    <>
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

              {canUpdateStatus && (
                <MenuItem
                  onClick={onOpenOrderStatusModal}
                  icon={<FiTruck color="green" />}
                >
                  Atualizar status
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </Box>
      </Card>

      <OrderStatusModal
        isOpen={isOpenOrderStatusModal}
        onClose={onCloseOrderStatusModal}
        order={order}
      />
    </>
  );
};
