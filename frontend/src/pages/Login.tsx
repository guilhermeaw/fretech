import { Box, Button, Center } from '@chakra-ui/react';

import { FormInput } from '../components/Form/FormInput';

const Login = () => {
  return (
    <Center h="100vh" w="100vw" bg="brand.500">
      <Box as="form" w="400px" bg="white" p="2rem" borderRadius={4}>
        <Center mb="2rem">
          <img
            src="/assets/images/big-logo.svg"
            alt="Logotipo do produto Fretech na cor roxa"
          />
        </Center>

        <FormInput
          type="email"
          placeholder="E-mail"
          label="Seu e-mail"
          wrapperProps={{ mb: '1rem' }}
        />

        <FormInput type="password" placeholder="Senha" label="Sua senha" />

        <Button type="submit" w="100%" my="1rem" variant="primary">
          Entrar
        </Button>
      </Box>
    </Center>
  );
};

export default Login;
