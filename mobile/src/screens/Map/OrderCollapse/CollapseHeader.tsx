import { Feather } from '@expo/vector-icons';
import { HStack, Heading, Icon, Text, VStack } from 'native-base';

export const CollapseHeader = () => {
  return (
    <HStack flex={1} space={4} direction="row" alignItems="center">
      <Icon as={Feather} name="package" size="6xl" />

      <VStack>
        <Heading size="sm">Pedido #444</Heading>
        <Text>Av. Central, 1234</Text>
        <Text>Centro, Lajeado - RS</Text>
        <Text>95914-500</Text>
      </VStack>
    </HStack>
  );
};
