import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiEdit, FiEye, FiMoreVertical, FiTrash } from 'react-icons/fi';

import { Card } from '../../../components/Card';
import { useFetchOrders } from '../../../services/queries';
import { ListContainer } from '../../../templates/ListContainer';
import { OrderStatusBadge } from '../components/OrderStatusBadge';

const OrdersList = () => {
  const { data: orders } = useFetchOrders();

  return (
    <ListContainer
      addButtonLink="/pedidos/novo"
      placeholder="Busca por pedidos"
      subtitle="Cadastre, edite e visualize os pedidos"
      title="Gerenciando Pedidos"
      headerLabels={[
        'ID',
        'Destinatário',
        'Cidade',
        'Estado',
        'Status',
        'Ações',
      ]}
    >
      {orders?.map(({ id, address, receiver, status }) => (
        <Card key={id}>
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

                <MenuItem icon={<FiTrash color="red" />}>Excluir</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Card>
      ))}
    </ListContainer>
  );
};

export default OrdersList;
