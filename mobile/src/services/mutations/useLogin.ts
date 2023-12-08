import { SignInCredentials } from '@hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import { useToast } from 'native-base';

import { api } from '../api';

type SessionValues = {
  token: string;
  user: User;
};

export const useLogin = () => {
  const { show } = useToast();

  return useMutation(
    ({ email, password }: SignInCredentials) =>
      api
        .post<SessionValues>('/sessions', { email, password })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        show({
          title: 'Erro ao fazer login',
          description: error.message,
          bgColor: 'red.500',
        });
      },
    },
  );
};
