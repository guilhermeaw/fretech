import { Feather } from '@expo/vector-icons';
import { useActiveOrderStore } from '@store/useActiveOrderStore';
import { HStack, Heading, Icon, Text, VStack } from 'native-base';

export const CollapseHeader = () => {
  const { activeOrder } = useActiveOrderStore();

  const { address } = activeOrder || {};

  return (
    <HStack flex={1} space={4} direction="row" alignItems="center">
      <Icon as={Feather} name="package" size="6xl" />

      <VStack>
        <Heading size="sm">Pedido #{activeOrder?.id}</Heading>
        <Text>{`${address?.street}, ${address?.number}`}</Text>
        <Text>{`${address?.city} - ${address?.state}`}</Text>
        <Text>{address?.cep}</Text>
      </VStack>
    </HStack>
  );
};
