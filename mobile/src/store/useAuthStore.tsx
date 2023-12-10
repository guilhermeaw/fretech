import { create } from 'zustand';

type AuthState = {
  token: string;
  user: User;
};

type AuthStore = {
  authValue: AuthState;
  setAuthValue: (val: AuthState) => void;
  loading: boolean;
  setLoading: (val: boolean) => void;
};

export const useAuthStore = create<AuthStore>(set => ({
  authValue: {} as AuthState,
  setAuthValue: val => set({ authValue: val }),
  loading: false,
  setLoading: val => set({ loading: val }),
}));
