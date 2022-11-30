import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { User } from '../../models/User';

export const useFetchDeliverymans = () => {
  const toast = useToast();

  return useQuery(
    ['deliverymans'],
    () => api.get<User[]>('/deliverymans').then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao buscar entregadores',
          description: error.message,
          status: 'error',
        });
      },
      staleTime: 1000 * 60 * 1, // 1 minute
    },
  );
};
