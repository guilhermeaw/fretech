import { useContext } from 'react';

import { AuthContext, AuthContextData } from './AuthContext';

export const useAuth = (): AuthContextData => {
  return useContext(AuthContext);
};
