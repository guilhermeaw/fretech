import React, { useCallback, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';

import { User } from '../../models/User';
import { api } from '../../services/api';
import { useLogin } from '../../services/mutations';
import { AuthContext, SignInCredentials } from './AuthContext';

type AuthProviderProps = {
  children: React.ReactNode;
};

interface AuthState {
  token: string;
  user: User;
}

enum COOKIES {
  AUTH_TOKEN = '@Fretech:token',
  USER = '@Fretech:user',
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [cookies, setCookies, removeCookie] = useCookies();

  const [data, setData] = useState<AuthState>(() => {
    const token = cookies[COOKIES.AUTH_TOKEN];
    const user = cookies[COOKIES.USER];

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      return { token, user };
    }

    return {} as AuthState;
  });

  const loginMutation = useLogin();

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const { token, user } = await loginMutation.mutateAsync({
        email,
        password,
      });

      setCookies(COOKIES.AUTH_TOKEN, token);
      setCookies(COOKIES.USER, user);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      setData({ token, user });
    },
    [loginMutation, setCookies],
  );

  const signOut = useCallback(() => {
    Object.values(COOKIES).forEach(obj => removeCookie(obj));
    window.location.href = '/';
  }, [removeCookie]);

  window.addEventListener('onUnauthorized', () => {
    signOut();
  });

  const value = useMemo(
    () => ({
      user: data.user,
      signIn,
      signOut,
    }),
    [data.user, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
