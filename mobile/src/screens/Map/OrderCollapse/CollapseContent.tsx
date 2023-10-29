import { Feather } from '@expo/vector-icons';
import { OrderStatus } from '@models/Order';
import { useActiveOrderStore } from '@store/useActiveOrderStore';
import { Center, HStack, Heading, Icon, Text, VStack } from 'native-base';

export const CollapseContent = () => {
  const { activeOrder } = useActiveOrderStore();

  const getOrderStatus = () => {
    if (activeOrder?.status === OrderStatus.DELIVERED) {
      return {
        icon: 'check-circle',
        label: 'Enviada',
      };
    }

    return {
      icon: 'clock',
      label: 'Pendente',
    };
  };

  const { icon, label } = getOrderStatus();

  return (
    <VStack space={8}>
      <HStack space={2}>
        <VStack flex={1} space={2}>
          <VStack>
            <Heading size="xs">Destinatário</Heading>
            <Text>{activeOrder?.receiver.name}</Text>
          </VStack>
        </VStack>

        <VStack space={2}>
          <Heading size="xs">Telefone</Heading>
          <Text>{activeOrder?.receiver.phone}</Text>
        </VStack>
      </HStack>

      <Center>
        <Icon as={Feather} name={icon} size="xl" />
        <Text>Confirmação de entrega {label}</Text>
      </Center>
    </VStack>
  );
};
