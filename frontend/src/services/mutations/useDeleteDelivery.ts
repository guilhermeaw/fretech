import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Delivery } from '../../models/Delivery';

type Props = {
  afterSuccess?: () => void;
};

type DeleteDelivery = Pick<Delivery, 'id'>;

export const useDeleteDelivery = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateDeliveriesQuery = (deletedDeliveryId: number) => {
    const previousDeliveries =
      queryClient.getQueryData<Delivery[]>(['deliveries']) ?? [];

    queryClient.setQueryData<Delivery[]>(
      ['deliveries'],
      previousDeliveries.filter(delivery => delivery.id !== deletedDeliveryId),
    );
  };

  const invalidateDeliveryQuery = (deletedDeliveryId: number) => {
    queryClient.invalidateQueries({
      queryKey: ['deliveries', deletedDeliveryId],
    });
  };

  return useMutation(
    (id: number) =>
      api
        .delete<DeleteDelivery>(`/deliveries/${id}`)
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao remover entrega',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: ({ id }: DeleteDelivery) => {
        toast({
          title: 'Entrega removida com sucesso',
          description: 'A entrega foi removida com sucesso',
          status: 'success',
        });
        updateDeliveriesQuery(id);
        invalidateDeliveryQuery(id);
        afterSuccess?.();
      },
    },
  );
};
