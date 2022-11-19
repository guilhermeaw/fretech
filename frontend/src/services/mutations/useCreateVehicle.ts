import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Vehicle } from '../../models/Vehicle';

type CreateVehicle = Omit<Vehicle, 'id' | 'status'>;

type Props = {
  afterSuccess?: () => void;
};

export const useCreateVehicle = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateVehiclesQueryIfExistsOnCache = (newVehicle: Vehicle) => {
    const cachedVehicles = queryClient.getQueryData<Vehicle[]>(['vehicles']);

    if (cachedVehicles) {
      queryClient.setQueryData<Vehicle[]>(
        ['vehicles'],
        [...cachedVehicles, newVehicle],
      );
    }
  };

  return useMutation(
    ({ model, plate, capacity }: CreateVehicle) =>
      api
        .post<Vehicle>('/vehicles', {
          model,
          plate,
          capacity,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao cadastrar veículo',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: (data: Vehicle) => {
        toast({
          title: 'Veículo cadastrado com sucesso',
          description: `O veículo ${data.model} de placa ${data.plate} foi criado com sucesso`,
          status: 'success',
        });
        updateVehiclesQueryIfExistsOnCache(data);
        afterSuccess?.();
      },
    },
  );
};
