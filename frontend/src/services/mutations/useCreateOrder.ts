import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Order } from '../../models/Order';

type CreateOrder = Omit<Order, 'id' | 'signature_url'>;

type Props = {
  afterSuccess?: () => void;
};

export const useCreateOrder = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateOrdersQueryIfExistsOnCache = (newOrder: Order) => {
    const cachedOrders = queryClient.getQueryData<Order[]>(['orders']);

    if (cachedOrders) {
      queryClient.setQueryData<Order[]>(
        ['orders'],
        [...cachedOrders, newOrder],
      );
    }
  };

  return useMutation(
    ({ address, receiver, status }: CreateOrder) =>
      api
        .post<Order>('/orders', {
          address,
          receiver,
          status,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao cadastrar pedido',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: (data: Order) => {
        toast({
          title: 'Pedido criado com sucesso',
          description: 'Pedido foi criado com sucesso',
          status: 'success',
        });
        updateOrdersQueryIfExistsOnCache(data);
        afterSuccess?.();
      },
    },
  );
};
