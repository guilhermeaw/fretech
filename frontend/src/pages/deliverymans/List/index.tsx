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
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import { FiEdit, FiMoreVertical, FiTrash, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
        <SimpleGrid
          key={id}
          bg="#fff"
          borderRadius="4px"
          p="1rem"
          my="1rem"
          columns={5}
          alignItems="center"
        >
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
        </SimpleGrid>
      ))}
    </>
  );
};

export default DeliveryMansList;
