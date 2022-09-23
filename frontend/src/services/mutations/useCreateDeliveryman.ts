import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Deliveryman } from '../../models/Deliveryman';
import { api } from '../api';

interface CreateDeliveryman extends Omit<Deliveryman, 'id'> {
  password: string;
  phone: string;
}

type Props = {
  afterSuccess?: () => void;
};

export const useCreateDeliveryman = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateDeliverymansQuery = (newDeliveryman: Deliveryman) => {
    const previousDeliverymans =
      queryClient.getQueryData<Deliveryman[]>(['deliverymans']) ?? [];

    queryClient.setQueryData<Deliveryman[]>(
      ['deliverymans'],
      [...previousDeliverymans, newDeliveryman],
    );
  };

  return useMutation(
    ({ name, email, password, phone }: CreateDeliveryman) =>
      api
        .post<Deliveryman>('/deliverymans', {
          name,
          email,
          password,
          phone,
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
      onSuccess: (data: Deliveryman) => {
        toast({
          title: 'Entregador criado com sucesso',
          description: `O entregador ${data.name} foi criado com sucesso`,
          status: 'success',
        });
        afterSuccess?.();
        updateDeliverymansQuery(data);
      },
    },
  );
};
