import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Vehicle } from '../../models/Vehicle';

type Props = {
  afterSuccess?: () => void;
};

export const useUpdateVehicle = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateVehiclesQuery = (updatedVehicle: Vehicle) => {
    const previousVehicles =
      queryClient.getQueryData<Vehicle[]>(['vehicles']) ?? [];

    queryClient.setQueryData<Vehicle[]>(
      ['vehicles'],
      previousVehicles.map(vehicle => {
        if (vehicle.id === updatedVehicle.id) {
          return updatedVehicle;
        }

        return vehicle;
      }),
    );
  };

  const updateVehicleQuery = (updatedVehicle: Vehicle) => {
    queryClient.setQueryData<Vehicle>(
      ['vehicle', updatedVehicle.id],
      updatedVehicle,
    );
  };

  return useMutation(
    ({ id, ...rest }: Vehicle) =>
      api
        .put<Vehicle>(`/vehicles/${id}`, {
          ...rest,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao editar veículo',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: (data: Vehicle) => {
        toast({
          title: 'Veículo editado com sucesso',
          description: `O veículo ${data.model} de placa ${data.plate} foi editado com sucesso`,
          status: 'success',
        });
        updateVehiclesQuery(data);
        updateVehicleQuery(data);
        afterSuccess?.();
      },
    },
  );
};
