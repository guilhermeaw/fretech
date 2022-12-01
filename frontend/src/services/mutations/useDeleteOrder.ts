import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Order } from '../../models/Order';

type Props = {
  afterSuccess?: () => void;
};

type DeleteOrder = Pick<Order, 'id'>;

export const useDeleteOrder = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateOrdersQuery = (deletedOrderId: number) => {
    const previousOrders = queryClient.getQueryData<Order[]>(['orders']) ?? [];

    queryClient.setQueryData<Order[]>(
      ['orders'],
      previousOrders.filter(order => order.id !== deletedOrderId),
    );
  };

  const invalidateOrderQuery = (deletedOrderId: number) => {
    queryClient.invalidateQueries({ queryKey: ['order', deletedOrderId] });
  };

  return useMutation(
    (id: number) =>
      api.delete<DeleteOrder>(`/orders/${id}`).then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao remover pedido',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: ({ id }: DeleteOrder) => {
        toast({
          title: 'Pedido excluído com sucesso',
          description: 'O pedido foi excluído com sucesso',
          status: 'success',
        });
        updateOrdersQuery(id);
        invalidateOrderQuery(id);
        queryClient.invalidateQueries(['deliveries']);
        queryClient.invalidateQueries(['delivery']);
        afterSuccess?.();
      },
    },
  );
};
