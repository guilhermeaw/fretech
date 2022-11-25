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
} from '@chakra-ui/react';

import { formatDate } from '../../../../utils';
import { Card } from '../../../../components/Card';
import { Occurrence } from '../../../../models/Occurrence';

type OccurrenceListItemProps = {
  occurrence: Occurrence;
  onOpenDetails: (occurrence: Occurrence) => void;
  onDelete: (occurrence: Occurrence) => void;
};

export const OccurrenceListItem = ({
  occurrence,
  onOpenDetails,
  onDelete,
}: OccurrenceListItemProps) => {
  const { id, order_id, name, created_at } = occurrence;

  return (
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
              onClick={() => onOpenDetails(occurrence)}
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
              onClick={() => onDelete(occurrence)}
            >
              Excluir
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Card>
  );
};
