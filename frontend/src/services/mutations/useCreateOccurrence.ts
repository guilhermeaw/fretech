import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Occurrence } from '../../models/Occurrence';

type CreateOccurrence = Omit<Occurrence, 'id' | 'created_at'>;

type Props = {
  afterSuccess?: () => void;
};

export const useCreateOccurrence = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateOccurrencesQueryIfExistsOnCache = (newOccurrence: Occurrence) => {
    const cachedOccurrences = queryClient.getQueryData<Occurrence[]>([
      'occurrences',
    ]);

    if (cachedOccurrences) {
      queryClient.setQueryData<Occurrence[]>(
        ['occurrences'],
        [...cachedOccurrences, newOccurrence],
      );
    }
  };

  return useMutation(
    ({ name, description, order_id }: CreateOccurrence) =>
      api
        .post<Occurrence>('/occurrences', {
          name,
          description,
          order_id,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao criar ocorrência',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: (data: Occurrence) => {
        toast({
          title: 'Ocorrência criada com sucesso',
          description: `A ocorrência ${data.name} foi criada com sucesso`,
          status: 'success',
        });
        updateOccurrencesQueryIfExistsOnCache(data);
        afterSuccess?.();
      },
    },
  );
};
