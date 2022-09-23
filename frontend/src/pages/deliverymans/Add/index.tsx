import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
} from './addDeliverymanSchema';
import { useCreateDeliveryman } from '../../../services/mutations';

const AddDeliveryman = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<NewDeliverymanFormData>({
    resolver: zodResolver(newDeliverymanValidationSchema),
  });
  const navigate = useNavigate();

  const { mutate: createDeliveryman } = useCreateDeliveryman({
    afterSuccess: () => navigate(-1),
  });

  const name = watch('name');

  const handleCreateNewDeliveryman = async (data: NewDeliverymanFormData) => {
    createDeliveryman(data);
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

        <FormInput
          label="Nome"
          errorMessage={errors?.name?.message}
          {...register('name')}
        />

        <FormInput
          label="E-mail"
          type="email"
          errorMessage={errors?.email?.message}
          {...register('email')}
        />

        <FormInput
          label="Senha"
          type="password"
          errorMessage={errors?.password?.message}
          {...register('password')}
        />

        <FormInput
          label="Telefone"
          type="tel"
          errorMessage={errors?.phone?.message}
          {...register('phone')}
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
