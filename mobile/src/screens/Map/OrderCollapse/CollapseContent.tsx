import { HStack, Heading, Text, VStack } from 'native-base';

export const CollapseContent = () => {
  return (
    <VStack space={8}>
      <HStack>
        <VStack flex={1} space={2}>
          <VStack>
            <Heading size="xs">Destinatário</Heading>
            <Text>Guilherme</Text>
          </VStack>

          <VStack>
            <Heading size="xs">Itens do pedido</Heading>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
          </VStack>
        </VStack>

        <VStack space={2}>
          <Heading size="xs">Telefone</Heading>
          <Text>51999808444</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
