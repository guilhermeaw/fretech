import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Delivery } from '../../models/Delivery';

type Props = {
  afterSuccess?: () => void;
};

type EditDelivery = Pick<Delivery, 'id' | 'start_date' | 'end_date'> & {
  vehicle_id: number;
  deliveryman_id: number;
  orders_ids: number[];
};

export const useUpdateDelivery = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateDeliveriesQuery = (updatedDelivery: Delivery) => {
    const previousDeliveries =
      queryClient.getQueryData<Delivery[]>(['deliveries']) ?? [];

    queryClient.setQueryData<Delivery[]>(
      ['deliveries'],
      previousDeliveries.map(delivery => {
        if (delivery.id === updatedDelivery.id) {
          return updatedDelivery;
        }

        return delivery;
      }),
    );
  };

  const updateDeliveryQuery = (updatedDelivery: Delivery) => {
    queryClient.setQueryData<Delivery>(
      ['delivery', updatedDelivery.id],
      updatedDelivery,
    );
  };

  return useMutation(
    ({ id, ...rest }: EditDelivery) =>
      api
        .put<Delivery>(`/deliveries/${id}`, {
          ...rest,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao editar entrega',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: (data: Delivery) => {
        toast({
          title: 'Entrega editada com sucesso',
          description: 'A entrega foi editada com sucesso',
          status: 'success',
        });
        // updateDeliveriesQuery(data);
        // updateDeliveryQuery(data);
        queryClient.invalidateQueries(['deliveries'], ['delivery', data.id]);
        queryClient.invalidateQueries(['delivery', data.id]);
        afterSuccess?.();
      },
    },
  );
};
