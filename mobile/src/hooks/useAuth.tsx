import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '@services/api';
import { useLogin } from '@services/mutations';
import { useAuthStore } from '@store/useAuthStore';
import { useCallback, useEffect } from 'react';
import { NativeEventEmitter } from 'react-native';

export type SignInCredentials = {
  email: string;
  password: string;
};

type AuthState = {
  token: string;
  user: User;
};

export const useAuth = () => {
  const { setAuthValue, setLoading, authValue } = useAuthStore();

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Fretech:token',
        '@Fretech:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setAuthValue({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    const eventEmitter = new NativeEventEmitter();
    const eventListener = eventEmitter.addListener('onUnauthorized', () => {
      signOut();
    });

    loadStorageData();

    return () => {
      eventListener.remove();
    };
  }, []);

  const loginMutation = useLogin();

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const { token, user } = await loginMutation.mutateAsync({
      email,
      password,
    });

    await AsyncStorage.multiSet([
      ['@Fretech:token', token],
      ['@Fretech:user', JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setAuthValue({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Fretech:token', '@Fretech:user']);

    setAuthValue({} as AuthState);
  }, []);

  return {
    signIn,
    signOut,
    user: authValue.user,
  };
};
