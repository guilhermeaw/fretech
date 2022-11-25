import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Occurrence } from '../../models/Occurrence';

type Props = {
  afterSuccess?: () => void;
};

type DeleteOccurrence = Pick<Occurrence, 'id'>;

export const useDeleteOccurrence = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateOccurrencesQuery = (deletedOccurrenceId: number) => {
    const previousOccurrences =
      queryClient.getQueryData<Occurrence[]>(['occurrences']) ?? [];

    queryClient.setQueryData<Occurrence[]>(
      ['occurrences'],
      previousOccurrences.filter(
        occurrence => occurrence.id !== deletedOccurrenceId,
      ),
    );
  };

  const invalidateOccurrenceQuery = (deletedOccurrenceId: number) => {
    queryClient.invalidateQueries({
      queryKey: ['occurrences', deletedOccurrenceId],
    });
  };

  return useMutation(
    (id: number) =>
      api
        .delete<DeleteOccurrence>(`/occurrences/${id}`)
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao remover ocorrência',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: ({ id }: DeleteOccurrence) => {
        toast({
          title: 'Ocorrência removida com sucesso',
          description: 'A ocorrência foi removida com sucesso',
          status: 'success',
        });
        updateOccurrencesQuery(id);
        invalidateOccurrenceQuery(id);
        afterSuccess?.();
      },
    },
  );
};
