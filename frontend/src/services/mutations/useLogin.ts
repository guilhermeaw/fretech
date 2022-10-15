import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';

import { SignInCredentials } from '../../store/Auth/AuthContext';
import { User } from '../../models/User';
import { api } from '../api';

type SessionValues = {
  token: string;
  user: User;
};

export const useLogin = () => {
  const toast = useToast();

  return useMutation(
    ({ email, password }: SignInCredentials) =>
      api
        .post<SessionValues>('/sessions', { email, password })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        toast({
          title: 'Erro ao fazer login',
          description: error.message,
          status: 'error',
        });
      },
    },
  );
};
