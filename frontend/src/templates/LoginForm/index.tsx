import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Center } from '@chakra-ui/react';

import { FormInput } from '../../components/Form/Input';
import { LoginFormData, loginValidationSchema } from './loginValidationSchema';

type LoginFormProps = {
  onSubmit: (data: LoginFormData) => void;
};

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginValidationSchema),
  });

  return (
    <Box
      as="form"
      w="400px"
      bg="white"
      p="2rem"
      m="1rem"
      borderRadius={4}
      onSubmit={handleSubmit(onSubmit)}
    >
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
        errorMessage={errors?.email?.message}
        {...register('email')}
      />
      <FormInput
        type="password"
        placeholder="Senha"
        label="Sua senha"
        errorMessage={errors?.password?.message}
        {...register('password')}
      />

      <Button type="submit" w="100%" my="1rem" colorScheme="brand">
        Entrar
      </Button>
    </Box>
  );
};
