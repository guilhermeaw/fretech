import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { Delivery } from '../../models/Delivery';

export const useFindDeliveryById = ({ id }: { id: number }) => {
  const toast = useToast();

  return useQuery(
    ['delivery', id],
    () =>
      api.get<Delivery>(`/deliveries/${id}`).then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao buscar entrega',
          description: error.message,
          status: 'error',
        });
      },
      staleTime: 1000 * 60 * 10, // 10 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
    },
  );
};
