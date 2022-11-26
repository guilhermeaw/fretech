import { Heading, Text, VStack } from '@chakra-ui/react';

type EmptyListProps = {
  message: string;
};

export const EmptyList = ({ message }: EmptyListProps) => {
  return (
    <VStack>
      <img
        src="/assets/images/empty-box.svg"
        alt="Caixa vazia"
        width="300rem"
      />

      <Heading>Nada por aqui...</Heading>
      <Text>{message}</Text>
    </VStack>
  );
};
