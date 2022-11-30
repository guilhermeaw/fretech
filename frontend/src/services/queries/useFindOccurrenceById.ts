import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { Occurrence } from '../../models/Occurrence';

export const useFindOccurrenceById = ({ id }: { id: number }) => {
  const toast = useToast();

  return useQuery(
    ['occurrence', id],
    () =>
      api.get<Occurrence>(`/occurrences/${id}`).then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao buscar ocorrência',
          description: error.message,
          status: 'error',
        });
      },
      staleTime: 1000 * 60 * 1, // 1 minute
    },
  );
};
