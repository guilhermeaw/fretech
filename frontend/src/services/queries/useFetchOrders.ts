import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { Order } from '../../models/Order';

export const useFetchOrders = () => {
  const toast = useToast();

  return useQuery(
    ['orders'],
    () => api.get<Order[]>('/orders').then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao buscar pedidos',
          description: error.message,
          status: 'error',
        });
      },
      staleTime: 1000 * 60 * 1, // 1 minute
    },
  );
};
