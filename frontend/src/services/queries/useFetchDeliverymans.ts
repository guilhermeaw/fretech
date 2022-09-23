import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { Deliveryman } from '../../models/Deliveryman';

export const useFetchDeliverymans = () => {
  const toast = useToast();

  return useQuery(
    ['deliverymans'],
    () =>
      api.get<Deliveryman[]>('/deliverymans').then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao buscar entregadores',
          description: error.message,
          status: 'error',
        });
      },
      staleTime: 1000 * 60 * 10, // 10 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
    },
  );
};
