import { Logo } from '@components/Logo';
import { useAuth } from '@hooks/useAuth';
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Text,
  VStack,
} from 'native-base';
import { useState } from 'react';

export const Login = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const { signIn } = useAuth();

  const handleChangeValue = (key: string, value: string) => {
    setFormValues(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    await signIn(formValues);
  };

  return (
    <Box flex={1} p={8}>
      <Center flex={1}>
        <VStack space={4} w="100%">
          <Logo />

          <VStack mt="1">
            <Text fontSize="2xl" bold>
              Seja bem-vindo
            </Text>

            <Text fontSize="md">Informe seus dados de login</Text>
          </VStack>

          <FormControl isRequired>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              bg="white"
              onChangeText={val => handleChangeValue('email', val)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              onChangeText={val => handleChangeValue('password', val)}
              bg="white"
              type="password"
            />
          </FormControl>

          <Button onPress={handleSubmit} size="md">
            <Text bold color="white">
              LOGIN
            </Text>
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};
