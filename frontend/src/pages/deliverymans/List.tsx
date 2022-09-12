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

import { ContentContainer } from '../../components/ContentContainer';
import { useFetchDeliverymans } from '../../services/queries';

const DeliveryMansList = () => {
  const { data: deliverymans } = useFetchDeliverymans();

  return (
    <ContentContainer>
      <Heading size="lg">Gerenciando entregadores</Heading>
      <Text>Cadastre, edite e visualize os entregadores</Text>

      <HStack my="1rem" justifyContent="space-between">
        <Input placeholder="Busca por entregadores" width="sm" bg="#fff" />
        <Button variant="primary" leftIcon={<FiPlus />}>
          CADASTRAR
        </Button>
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
    </ContentContainer>
  );
};

export default DeliveryMansList;
