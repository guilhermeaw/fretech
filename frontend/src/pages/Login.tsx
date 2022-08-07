import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Center h="100vh" w="100vw" bg="#7D40E7">
      <Box as="form" w="400px" bg="white" p="2rem" borderRadius={4}>
        <Heading textAlign="center" my="2rem">
          Fretech
        </Heading>

        <FormControl mb="1rem">
          <FormLabel>Seu e-mail</FormLabel>
          <Input type="email" placeholder="E-mail" />
        </FormControl>

        <FormControl>
          <FormLabel>Sua senha</FormLabel>
          <Input type="password" placeholder="Senha" />
        </FormControl>

        <Button type="submit" w="100%" my="1rem">
          Entrar
        </Button>
      </Box>
    </Center>
  );
};

export default Login;
