import {
  Avatar,
  Button,
  Center,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';

import { FormInput } from '../../components/Form/FormInput';

const AddDeliveryman = () => {
  return (
    <>
      <Heading fontSize="3xl">Cadastro de entregadores</Heading>
      <Text>Cadastre novos entregadores para envio das encomendas</Text>

      <form
        style={{
          backgroundColor: '#fff',
          borderRadius: 8,
          padding: '1rem',
          margin: '1rem 0',
        }}
      >
        <Center>
          <Avatar name="" size="2xl" />
        </Center>

        <FormInput label="Nome" />
        <FormInput label="E-mail" type="email" />
        <FormInput label="Senha" type="password" />
        <FormInput
          label="Telefone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />

        <HStack justify="flex-end" py="1rem">
          <Button>Cancelar</Button>
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default AddDeliveryman;
