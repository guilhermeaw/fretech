import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Routes } from './routes';
import { customTheme } from './styles/theme';

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={new QueryClient()}>
        <Routes />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
