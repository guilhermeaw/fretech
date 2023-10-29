import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useTheme, Box } from 'native-base';

import { HomeStack } from './HomeStack';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.primary[100];

  return (
    <Box flex={1} bg="primary.100" safeArea>
      <NavigationContainer theme={theme}>
        {/* <AppRoutes /> */}
        <HomeStack />
      </NavigationContainer>
    </Box>
  );
}
