import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { api } from '../api';
import { User } from '../../models/User';

interface ChangeUserPassword {
  newPassword: string;
  oldPassword: string;
  id: number;
}

type Props = {
  afterSuccess?: () => void;
};

export const useUpdatePassword = ({ afterSuccess }: Props) => {
  const toast = useToast();

  return useMutation(
    ({ newPassword, oldPassword, id }: ChangeUserPassword) =>
      api
        .put<User>(`/users/password/${id}`, {
          newPassword,
          oldPassword,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao trocar a senha',
          description: error.message,
          status: 'error',
        });
      },
      onSuccess: () => {
        toast({
          title: 'Senha alterada com sucesso',
          description: 'A senha foi alterada com sucesso',
          status: 'success',
        });
        afterSuccess?.();
      },
    },
  );
};
