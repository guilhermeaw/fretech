import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../api';
import { Vehicle } from '../../models/Vehicle';

type Props = {
  afterSuccess?: () => void;
};

export const useDeleteVehicle = ({ afterSuccess }: Props) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const updateVehiclesQuery = (deletedVehicleId: number) => {
    const previousVehicles =
      queryClient.getQueryData<Vehicle[]>(['vehicles']) ?? [];

    queryClient.setQueryData<Vehicle[]>(
      ['vehicles'],
      previousVehicles.filter(vehicle => vehicle.id !== deletedVehicleId),
    );
  };

  const invalidateVehicleQuery = (deletedVehicleId: number) => {
    queryClient.invalidateQueries({ queryKey: ['vehicle', deletedVehicleId] });
  };

  return useMutation(
    (id: number) =>
      api.delete<Vehicle>(`/vehicles/${id}`).then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao remover veículo',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: ({ id }: Pick<Vehicle, 'id'>) => {
        toast({
          title: 'Veículo excluído com sucesso',
          description: 'O veículo foi excluído com sucesso',
          status: 'success',
        });
        updateVehiclesQuery(id);
        invalidateVehicleQuery(id);
        afterSuccess?.();
      },
    },
  );
};
