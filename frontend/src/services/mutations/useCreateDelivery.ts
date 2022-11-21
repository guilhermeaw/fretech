import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Delivery } from '../../models/Delivery';

type CreateDelivery = {
  orders_ids: number[];
  deliveryman_id: number;
  vehicle_id: number;
};

type Props = {
  afterSuccess?: () => void;
};

export const useCreateDelivery = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateDeliveriesQueryIfExistsOnCache = (newDelivery: Delivery) => {
    const cachedDeliveries = queryClient.getQueryData<Delivery[]>([
      'deliveries',
    ]);

    if (cachedDeliveries) {
      queryClient.setQueryData<Delivery[]>(
        ['deliveries'],
        [...cachedDeliveries, newDelivery],
      );
    }
  };

  return useMutation(
    ({ deliveryman_id, orders_ids, vehicle_id }: CreateDelivery) =>
      api
        .post<Delivery>('/deliveries', {
          deliveryman_id,
          orders_ids,
          vehicle_id,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao cadastrar entrega',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: (data: Delivery) => {
        toast({
          title: 'Entrega cadastrada com sucesso',
          description: 'A entrega foi cadastrada com sucesso',
          status: 'success',
        });
        updateDeliveriesQueryIfExistsOnCache(data);
        afterSuccess?.();
      },
    },
  );
};
