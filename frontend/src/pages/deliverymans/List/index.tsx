import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

import { FiEdit, FiMoreVertical, FiTrash, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Card } from '../../../components/Card';
import { useFetchDeliverymans } from '../../../services/queries';

const DeliveryMansList = () => {
  const { data: deliverymans } = useFetchDeliverymans();

  return (
    <>
      <Heading size="lg">Gerenciando entregadores</Heading>
      <Text>Cadastre, edite e visualize os entregadores</Text>

      <HStack my="1rem" justifyContent="space-between">
        <Input placeholder="Busca por entregadores" width="sm" bg="#fff" />
        <Link to="/entregadores/novo">
          <Button variant="primary" leftIcon={<FiPlus />}>
            CADASTRAR
          </Button>
        </Link>
      </HStack>

      {deliverymans?.map(({ id, name, email }) => (
        <Card key={id} columns={5}>
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
                <MenuItem icon={<FiTrash color="red" />}>Excluir</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default DeliveryMansList;
