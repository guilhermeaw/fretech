import { ChakraProvider } from '@chakra-ui/react';

import { Routes } from './routes';
import { customTheme } from './styles/theme';

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Routes />
    </ChakraProvider>
  );
};

export default App;
