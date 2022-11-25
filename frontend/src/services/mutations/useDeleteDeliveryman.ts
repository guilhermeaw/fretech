import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { User } from '../../models/User';

type Props = {
  afterSuccess?: () => void;
};

type DeleteDeliveryman = Pick<User, 'id'>;

export const useDeleteDeliveryman = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateDeliverymansQuery = (deletedDeliverymanId: number) => {
    const previousDeliverymans =
      queryClient.getQueryData<User[]>(['deliverymans']) ?? [];

    queryClient.setQueryData<User[]>(
      ['deliverymans'],
      previousDeliverymans.filter(
        deliveryman => deliveryman.id !== deletedDeliverymanId,
      ),
    );
  };

  const invalidateDeliverymanQuery = (deletedDeliverymanId: number) => {
    queryClient.invalidateQueries({
      queryKey: ['deliveryman', deletedDeliverymanId],
    });
  };

  return useMutation(
    (id: number) =>
      api
        .delete<DeleteDeliveryman>(`/deliverymans/${id}`)
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao remover entregador',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: ({ id }: DeleteDeliveryman) => {
        toast({
          title: 'Entregador excluído com sucesso',
          description: 'O entregador foi excluído com sucesso',
          status: 'success',
        });
        updateDeliverymansQuery(id);
        invalidateDeliverymanQuery(id);
        afterSuccess?.();
      },
    },
  );
};
