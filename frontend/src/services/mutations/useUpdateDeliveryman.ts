import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { User, UserRole } from '../../models/User';
import { api } from '../api';

interface EditDeliveryman extends Omit<User, 'role'> {
  password: string;
  phone: string;
}

type Props = {
  afterSuccess?: () => void;
};

export const useUpdateDeliveryman = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateDeliverymansQuery = (updatedDeliveryman: User) => {
    const previousDeliverymans =
      queryClient.getQueryData<User[]>(['deliverymans']) ?? [];

    queryClient.setQueryData<User[]>(
      ['deliverymans'],
      previousDeliverymans.map(deliveryman => {
        if (deliveryman.id === updatedDeliveryman.id) {
          return updatedDeliveryman;
        }

        return deliveryman;
      }),
    );
  };

  const updateDeliverymanQuery = (updatedDeliveryman: User) => {
    queryClient.setQueryData<User>(
      ['deliveryman', updatedDeliveryman.id],
      updatedDeliveryman,
    );
  };

  return useMutation(
    ({ name, email, password, phone, id }: EditDeliveryman) =>
      api
        .put<User>(`/users/${id}`, {
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
          title: 'Erro ao editar entregador',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: (data: User) => {
        toast({
          title: 'Entregador editado com sucesso',
          description: `O entregador ${data.name} foi editado com sucesso`,
          status: 'success',
        });
        updateDeliverymansQuery(data);
        updateDeliverymanQuery(data);
        afterSuccess?.();
      },
    },
  );
};
