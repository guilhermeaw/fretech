import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Order } from '../../models/Order';

type Props = {
  afterSuccess?: () => void;
};

export const useUpdateOrder = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateOrdersQuery = (updatedOrder: Order) => {
    const previousOrders = queryClient.getQueryData<Order[]>(['orders']) ?? [];

    queryClient.setQueryData<Order[]>(
      ['orders'],
      previousOrders.map(order => {
        if (order.id === updatedOrder.id) {
          return updatedOrder;
        }

        return order;
      }),
    );
  };

  const updateOrderQuery = (updatedOrder: Order) => {
    queryClient.setQueryData<Order>(['order', updatedOrder.id], updatedOrder);
  };

  return useMutation(
    ({ id, ...rest }: Order) =>
      api
        .put<Order>(`/orders/${id}`, {
          ...rest,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao editar pedido',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: (data: Order) => {
        toast({
          title: 'Pedido editado com sucesso',
          description: 'O pedido foi editado com sucesso',
          status: 'success',
        });
        updateOrderQuery(data);
        updateOrdersQuery(data);
        queryClient.invalidateQueries(['deliveries']);
        queryClient.invalidateQueries(['delivery']);
        afterSuccess?.();
      },
    },
  );
};
