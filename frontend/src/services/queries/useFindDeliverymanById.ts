import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { User } from '../../models/User';

export const useFindDeliverymanById = ({ id }: { id: number }) => {
  const toast = useToast();

  return useQuery(
    ['deliveryman', id],
    () => api.get<User>(`/users/${id}`).then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao buscar usuário',
          description: error.message,
          status: 'error',
        });
      },
      staleTime: 1000 * 60 * 1, // 1 minute
    },
  );
};
