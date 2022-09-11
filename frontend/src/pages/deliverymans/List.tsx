import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react';

import { ContentContainer } from '../../components/ContentContainer';

const DeliveryMansList = () => {
  const deliverymans = [
    {
      id: 1,
      name: 'João da Silva',
      email: 'joao@gmail.com',
      avatar_url: '',
    },
    {
      id: 2,
      name: 'Maria da Silva',
      email: 'maria@gmail.com',
      avatar_url: '',
    },
  ];

  return (
    <ContentContainer>
      <Heading size="lg">Gerenciando entregadores</Heading>
      <Text>Cadastre, edite e visualize os entregadores</Text>

      <HStack my="1rem" justifyContent="space-between">
        <Input placeholder="Busca por entregadores" width="sm" bg="#fff" />
        <Button variant="primary">CADASTRAR</Button>
      </HStack>

      {deliverymans.map(({ id, name, email }) => (
        <Box key={id} bg="#fff" borderRadius="4px" p="1rem" my="1rem">
          <HStack spacing="2rem" justifyContent="space-between">
            <Text>{`#${id}`}</Text>
            <Avatar name={name} />
            <Text>{name}</Text>
            <Text>{email}</Text>
            <IconButton aria-label="Ações" variant="ghost" />
          </HStack>
        </Box>
      ))}
    </ContentContainer>
  );
};

export default DeliveryMansList;
