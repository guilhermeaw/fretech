import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Routes } from './routes';
import { AuthProvider } from './store/Auth';
import { customTheme } from './styles/theme';

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
