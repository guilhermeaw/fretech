import { Link } from 'react-router-dom';
import { FiEdit, FiMoreVertical, FiSettings, FiTrash } from 'react-icons/fi';
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
  useDisclosure,
} from '@chakra-ui/react';

import { Card } from '../../../../components/Card';
import { formatDateTime } from '../../../../utils';
import { Delivery } from '../../../../models/Delivery';
import { DeliveryProgress } from '../DeliveryProgress';
import { getDeliveryProgressValue } from '../../utils';
import { AlertDialog } from '../../../../components/AlertDialog';
import { useDeleteDelivery } from '../../../../services/mutations';

type DeliveryListItemProps = {
  delivery: Delivery;
};

export const DeliveryListItem = ({ delivery }: DeliveryListItemProps) => {
  const { id, orders, deliveryman, vehicle, start_date } = delivery;

  const { mutate: deleteDelivery } = useDeleteDelivery({});

  const {
    isOpen: isOpenDeliveryDelete,
    onClose: onCloseDeliveryDelete,
    onOpen: onOpenDeliveryDelete,
  } = useDisclosure();

  const handleDeleteDelivery = () => {
    deleteDelivery(id);
    onCloseDeliveryDelete();
  };

  return (
    <>
      <Card>
        <DeliveryProgress value={getDeliveryProgressValue(delivery.orders)} />

        <Stack direction="row" align="center">
          <Avatar name={deliveryman.name} />
          <Text>{deliveryman.name}</Text>
        </Stack>

        <Text>{vehicle.model}</Text>
        <Text>{`${orders.length} pedido${
          orders.length === 1 ? '' : 's'
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
              <MenuItem
                as={Link}
                to={`/entregas/editar/${delivery.id}`}
                icon={<FiEdit color="blue" />}
              >
                Editar
              </MenuItem>
              <MenuItem
                as={Link}
                to={`/entregas/controlar/${delivery.id}`}
                icon={<FiSettings color="purple" />}
              >
                Controlar pedidos
              </MenuItem>
              <MenuItem
                icon={<FiTrash color="red" />}
                onClick={onOpenDeliveryDelete}
              >
                Excluir
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Card>

      <AlertDialog
        title="Remover entrega"
        description="Tem certeza que deseja remover esta entrega?"
        isOpen={isOpenDeliveryDelete}
        onClose={onCloseDeliveryDelete}
        afterConfirm={handleDeleteDelivery}
      />
    </>
  );
};
