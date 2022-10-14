import { Center } from '@chakra-ui/react';

import { useAuth } from '../store/Auth';
import { LoginForm } from '../templates/LoginForm';
import { LoginFormData } from '../templates/LoginForm/loginValidationSchema';

const Login = () => {
  const { signIn } = useAuth();

  const handleLogin = (data: LoginFormData) => {
    signIn(data);
  };

  return (
    <Center h="100vh" w="100vw" bg="brand.500">
      <LoginForm onSubmit={handleLogin} />
    </Center>
  );
};

export default Login;
