import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { Delivery } from '../../models/Delivery';

export const useFetchDeliveries = () => {
  const toast = useToast();

  return useQuery(
    ['deliveries'],
    () => api.get<Delivery[]>('/deliveries').then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao buscar entregas',
          description: error.message,
          status: 'error',
        });
      },
      staleTime: 1000 * 60 * 1, // 1 minute
    },
  );
};
