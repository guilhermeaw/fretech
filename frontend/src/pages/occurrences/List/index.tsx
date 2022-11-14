import { useState } from 'react';
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
import { Link } from 'react-router-dom';
import { FiEdit, FiEye, FiMoreVertical, FiTrash } from 'react-icons/fi';

import { formatDate } from '../../../utils';
import { Card } from '../../../components/Card';
import { Occurrence } from '../../../models/Occurrence';
import { OccurrenceModal } from '../components/OccurrenceModal';
import { useFetchOccurrences } from '../../../services/queries';
import { ListContainer } from '../../../templates/ListContainer';

const OccurrencesList = () => {
  const [openedOccurrence, setOpenedOccurrence] = useState({} as Occurrence);

  const { data: occurrences } = useFetchOccurrences();
  const {
    isOpen: isOpenOccurrenceDetails,
    onClose: onCloseOccurrenceDetails,
    onOpen: onOpenOccurrenceDetails,
  } = useDisclosure();

  const handleOpenOccurrenceDetails = (occurrence: Occurrence) => {
    setOpenedOccurrence(occurrence);
    onOpenOccurrenceDetails();
  };

  return (
    <>
      <ListContainer
        addButtonLink="/ocorrencias/nova"
        placeholder="Busca por ocorrências"
        subtitle="Cadastre, edite e visualize as ocorrências dos pedidos"
        title="Gerenciando ocorrências"
        headerLabels={['Pedido', 'Ocorrência', 'Criada em', 'Ações']}
      >
        {occurrences?.map(occurrence => {
          const { id, order_id, name, created_at } = occurrence;

          return (
            <Card key={id}>
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
                      onClick={() => handleOpenOccurrenceDetails(occurrence)}
                      icon={<FiEye color="purple" />}
                    >
                      Visualizar
                    </MenuItem>
                    {/* <MenuItem
                      as={Link}
                      to={`/ocorrencias/editar/${id}`}
                      icon={<FiEdit color="blue" />}
                    >
                      Editar
                    </MenuItem> */}
                    {/* <MenuItem icon={<FiTrash color="red" />}>Excluir</MenuItem> */}
                  </MenuList>
                </Menu>
              </Box>
            </Card>
          );
        })}
      </ListContainer>

      <OccurrenceModal
        isOpen={isOpenOccurrenceDetails}
        onClose={onCloseOccurrenceDetails}
        occurrence={openedOccurrence}
      />
    </>
  );
};

export default OccurrencesList;
