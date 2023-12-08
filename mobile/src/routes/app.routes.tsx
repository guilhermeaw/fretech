import { useAuth } from '@hooks/useAuth';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Login } from '@screens/Login';
import { useTheme, Box } from 'native-base';

import { HomeStack } from './HomeStack';

export function AppRoutes() {
  const { colors } = useTheme();
  const { user } = useAuth();

  const theme = DefaultTheme;
  theme.colors.background = colors.primary[100];

  // const isLogged = !!user;
  const isLogged = false;

  return (
    <Box flex={1} bg="primary.100" safeArea>
      <NavigationContainer theme={theme}>
        {isLogged ? <HomeStack /> : <Login />}
      </NavigationContainer>
    </Box>
  );
}
