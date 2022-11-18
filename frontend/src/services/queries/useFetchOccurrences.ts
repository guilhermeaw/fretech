import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { Occurrence } from '../../models/Occurrence';

export const useFetchOccurrences = () => {
  const toast = useToast();

  return useQuery(
    ['occurrences'],
    () => api.get<Occurrence[]>('/occurrences').then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao buscar ocorrências',
          description: error.message,
          status: 'error',
        });
      },
      staleTime: 1000 * 60 * 10, // 10 minutes
      cacheTime: 1000 * 60 * 10, // 10 minutes
    },
  );
};
