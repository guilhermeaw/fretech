import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Avatar,
  Button,
  Center,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';

import { FormInput } from '../../../components/Form/FormInput';
import {
  NewDeliverymanFormData,
  newDeliverymanValidationSchema,
} from './formSchema';

const AddDeliveryman = () => {
  const { register, watch, handleSubmit } = useForm<NewDeliverymanFormData>({
    resolver: zodResolver(newDeliverymanValidationSchema),
  });

  const name = watch('name');

  const handleCreateNewDeliveryman = (data: NewDeliverymanFormData) => {
    console.log(data);
  };

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
        onSubmit={handleSubmit(handleCreateNewDeliveryman)}
      >
        <Center>
          <Avatar name={name} size="2xl" />
        </Center>

        <FormInput label="Nome" {...register('name')} />
        <FormInput label="E-mail" type="email" {...register('email')} />
        <FormInput label="Senha" type="password" {...register('password')} />
        <FormInput label="Telefone" type="tel" {...register('phone')} />

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
