import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';

type Deliveryman = {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
};

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
    },
  );
};
