import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { FiEdit, FiMoreVertical, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { User } from '../../../models/User';
import { Card } from '../../../components/Card';
import { AlertDialog } from '../../../components/AlertDialog';
import { useDeleteDeliveryman } from '../../../services/mutations';

type DeliverymansListItemProps = {
  deliveryman: User;
};

export const DeliverymansListItem = ({
  deliveryman,
}: DeliverymansListItemProps) => {
  const { id, name, email } = deliveryman;

  const { mutate: deleteDeliveryman } = useDeleteDeliveryman({});

  const {
    isOpen: isOpenDeliverymanDelete,
    onClose: onCloseDeliverymanDelete,
    onOpen: onOpenDeliverymanDelete,
  } = useDisclosure();

  const handleDeleteDeliveryman = () => {
    deleteDeliveryman(id);
    onCloseDeliverymanDelete();
  };

  return (
    <>
      <Card>
        <Text>{`#${id}`}</Text>
        <Avatar name={name} />
        <Text>{name}</Text>
        <Text>{email}</Text>

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
                to={`/entregadores/editar/${id}`}
                icon={<FiEdit color="blue" />}
              >
                Editar
              </MenuItem>
              <MenuItem
                icon={<FiTrash color="red" />}
                onClick={onOpenDeliverymanDelete}
              >
                Excluir
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Card>

      <AlertDialog
        title={`Remover entregador ${name}`}
        description="Tem certeza que deseja remover este entregador?"
        isOpen={isOpenDeliverymanDelete}
        onClose={onCloseDeliverymanDelete}
        afterConfirm={handleDeleteDeliveryman}
      />
    </>
  );
};
