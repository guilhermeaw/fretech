import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Deliveryman } from '../../models/Deliveryman';
import { api } from '../api';

interface EditDeliveryman extends Deliveryman {
  password: string;
  phone: string;
}

type Props = {
  afterSuccess?: () => void;
};

export const useUpdateDeliveryman = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateDeliverymansQuery = (updatedDeliveryman: Deliveryman) => {
    const previousDeliverymans =
      queryClient.getQueryData<Deliveryman[]>(['deliverymans']) ?? [];

    queryClient.setQueryData<Deliveryman[]>(
      ['deliverymans'],
      previousDeliverymans.map(deliveryman => {
        if (deliveryman.id === updatedDeliveryman.id) {
          return updatedDeliveryman;
        }

        return deliveryman;
      }),
    );
  };

  const updateDeliverymanQuery = (updatedDeliveryman: Deliveryman) => {
    queryClient.setQueryData<Deliveryman>(
      ['deliveryman', updatedDeliveryman.id],
      updatedDeliveryman,
    );
  };

  return useMutation(
    ({ name, email, password, phone, id }: EditDeliveryman) =>
      api
        .put<Deliveryman>(`/deliverymans/${id}`, {
          name,
          email,
          password,
          phone,
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
      onSuccess: (data: Deliveryman) => {
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
