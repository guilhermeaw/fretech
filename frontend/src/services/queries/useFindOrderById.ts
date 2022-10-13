import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { Order } from '../../models/Order';

export const useFindOrderById = ({ id }: { id: number }) => {
  const toast = useToast();

  return useQuery(
    ['order', id],
    () => api.get<Order>(`/orders/${id}`).then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao buscar pedido',
          description: error.message,
          status: 'error',
        });
      },
      staleTime: 1000 * 60 * 10, // 10 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
    },
  );
};
