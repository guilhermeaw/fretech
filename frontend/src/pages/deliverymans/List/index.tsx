import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

import { FiEdit, FiMoreVertical, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Card } from '../../../components/Card';
import { ListContainer } from '../../../templates/ListContainer';
import { useFetchDeliverymans } from '../../../services/queries';

const DeliverymansList = () => {
  const { data: deliverymans } = useFetchDeliverymans();

  return (
    <ListContainer
      addButtonLink="/entregadores/novo"
      title="Gerenciando entregadores"
      subtitle="Cadastre, edite e visualize os entregadores"
      placeholder="Busca por entregadores"
      headerLabels={['ID', 'Foto', 'Nome', 'Email', 'Ações']}
    >
      {deliverymans?.map(({ id, name, email }) => (
        <Card key={id}>
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
                {/* <MenuItem icon={<FiTrash color="red" />}>Excluir</MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
        </Card>
      ))}
    </ListContainer>
  );
};

export default DeliverymansList;
