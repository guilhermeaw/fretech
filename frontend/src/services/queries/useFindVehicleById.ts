import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { Vehicle } from '../../models/Vehicle';

export const useFindVehicleById = ({ id }: { id: number }) => {
  const toast = useToast();

  return useQuery(
    ['vehicle', id],
    () => api.get<Vehicle>(`/vehicles/${id}`).then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao buscar veículo',
          description: error.message,
          status: 'error',
        });
      },
      staleTime: 1000 * 60 * 10, // 10 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
    },
  );
};
