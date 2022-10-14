import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { User, UserRole } from '../../models/User';
import { api } from '../api';

interface CreateDeliveryman extends Omit<User, 'id'> {
  password: string;
}

type Props = {
  afterSuccess?: () => void;
};

export const useCreateDeliveryman = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateDeliverymansQueryIfExistsOnCache = (newDeliveryman: User) => {
    const cachedDeliverymans = queryClient.getQueryData<User[]>([
      'deliverymans',
    ]);

    if (cachedDeliverymans) {
      queryClient.setQueryData<User[]>(
        ['deliverymans'],
        [...cachedDeliverymans, newDeliveryman],
      );
    }
  };

  return useMutation(
    ({ name, email, password, phone }: CreateDeliveryman) =>
      api
        .post<User>('/deliverymans', {
          name,
          email,
          password,
          phone,
          role: UserRole.DELIVERYMAN,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao criar entregador',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: (data: User) => {
        toast({
          title: 'Entregador criado com sucesso',
          description: `O entregador ${data.name} foi criado com sucesso`,
          status: 'success',
        });
        updateDeliverymansQueryIfExistsOnCache(data);
        afterSuccess?.();
      },
    },
  );
};
