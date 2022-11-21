import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Occurrence } from '../../models/Occurrence';

type Props = {
  afterSuccess?: () => void;
};

export const useUpdateOccurrence = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateOccurrencesQuery = (updatedOccurrence: Occurrence) => {
    const previousOccurrences =
      queryClient.getQueryData<Occurrence[]>(['occurrences']) ?? [];

    queryClient.setQueryData<Occurrence[]>(
      ['occurrences'],
      previousOccurrences.map(occurrence => {
        if (occurrence.id === updatedOccurrence.id) {
          return updatedOccurrence;
        }

        return occurrence;
      }),
    );
  };

  const updateOccurrenceQuery = (updatedOccurrence: Occurrence) => {
    queryClient.setQueryData<Occurrence>(
      ['occurrence', updatedOccurrence.id],
      updatedOccurrence,
    );
  };

  return useMutation(
    ({ id, ...rest }: Occurrence) =>
      api
        .put<Occurrence>(`/occurrences/${id}`, {
          ...rest,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao editar ocorrência',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: (data: Occurrence) => {
        toast({
          title: 'Ocorrência editada com sucesso',
          description: `A ocorrência ${data.name} foi editada com sucesso`,
          status: 'success',
        });
        updateOccurrencesQuery(data);
        updateOccurrenceQuery(data);
        afterSuccess?.();
      },
    },
  );
};
