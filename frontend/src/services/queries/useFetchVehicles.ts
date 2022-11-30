import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { Vehicle } from '../../models/Vehicle';

export const useFetchVehicles = () => {
  const toast = useToast();

  return useQuery(
    ['vehicles'],
    () => api.get<Vehicle[]>('/vehicles').then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao buscar veículos',
          description: error.message,
          status: 'error',
        });
      },
      staleTime: 1000 * 60 * 1, // 1 minute
    },
  );
};
