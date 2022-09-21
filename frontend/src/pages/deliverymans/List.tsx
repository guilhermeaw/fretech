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

import { useFetchDeliverymans } from '../../services/queries';

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
        <Box key={id} bg="#fff" borderRadius="4px" p="1rem" my="1rem">
          <HStack spacing="2rem" justifyContent="space-between">
            <Text>{`#${id}`}</Text>
            <Avatar name={name} />
            <Text>{name}</Text>
            <Text>{email}</Text>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Ações"
                variant="ghost"
                icon={<FiMoreVertical />}
              />
              <MenuList>
                <MenuItem icon={<FiEdit color="blue" />}>Editar</MenuItem>
                <MenuItem icon={<FiTrash color="red" />}>Excluir</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Box>
      ))}
    </>
  );
};

export default DeliveryMansList;
