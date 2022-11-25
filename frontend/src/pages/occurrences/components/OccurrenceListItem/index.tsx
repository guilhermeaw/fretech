import { Link } from 'react-router-dom';
import { FiEdit, FiEye, FiMoreVertical, FiTrash } from 'react-icons/fi';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Link as ChakraLink,
  useDisclosure,
} from '@chakra-ui/react';

import { formatDate } from '../../../../utils';
import { Card } from '../../../../components/Card';
import { OccurrenceModal } from '../OccurrenceModal';
import { Occurrence } from '../../../../models/Occurrence';
import { AlertDialog } from '../../../../components/AlertDialog';
import { useDeleteOccurrence } from '../../../../services/mutations';

type OccurrenceListItemProps = {
  occurrence: Occurrence;
};

export const OccurrenceListItem = ({ occurrence }: OccurrenceListItemProps) => {
  const { id, order_id, name, created_at } = occurrence;

  const { mutate: deleteOccurrence } = useDeleteOccurrence({});

  const {
    isOpen: isOpenOccurrenceDetails,
    onClose: onCloseOccurrenceDetails,
    onOpen: onOpenOccurrenceDetails,
  } = useDisclosure();

  const {
    isOpen: isOpenOccurrenceDelete,
    onClose: onCloseOccurrenceDelete,
    onOpen: onOpenOccurrenceDelete,
  } = useDisclosure();

  const handleDeleteOccurrence = () => {
    deleteOccurrence(id);
    onCloseOccurrenceDelete();
  };

  return (
    <>
      <Card>
        <ChakraLink
          as={Link}
          to={`/pedidos/${order_id}`}
        >{`#${order_id}`}</ChakraLink>
        <Text>{name}</Text>
        <Text>{formatDate(created_at)}</Text>

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
                onClick={onOpenOccurrenceDetails}
                icon={<FiEye color="purple" />}
              >
                Visualizar
              </MenuItem>
              <MenuItem
                as={Link}
                to={`/ocorrencias/editar/${id}`}
                icon={<FiEdit color="blue" />}
              >
                Editar
              </MenuItem>
              <MenuItem
                icon={<FiTrash color="red" />}
                onClick={onOpenOccurrenceDelete}
              >
                Excluir
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Card>

      <OccurrenceModal
        isOpen={isOpenOccurrenceDetails}
        onClose={onCloseOccurrenceDetails}
        occurrence={occurrence}
      />

      <AlertDialog
        title={`Remover ocorrência ${name}`}
        description="Tem certeza que deseja remover esta ocorrência?"
        isOpen={isOpenOccurrenceDelete}
        onClose={onCloseOccurrenceDelete}
        afterConfirm={handleDeleteOccurrence}
      />
    </>
  );
};
