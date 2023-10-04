import { ScreenContainer } from '@components/ScreenContainer';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  ScrollView,
  Icon,
  Text,
  Center,
  Heading,
  VStack,
  Pressable,
  Box,
} from 'native-base';

export function Orders() {
  const navigation = useNavigation();

  const handleNewDelivery = () => {
    navigation.navigate('map');
  };

  return (
    <ScreenContainer>
      <ScrollView horizontal>
        <Button flexDir="column" p={4} onPress={handleNewDelivery}>
          <Center>
            <Icon as={Feather} name="package" size="5xl" color="white" />
            <Text fontSize="md" color="white">
              Iniciar nova entrega
            </Text>
          </Center>
        </Button>
      </ScrollView>

      <VStack mt="8" space="2">
        <Heading size="md">Em trânsito</Heading>

        <Pressable>
          <Box bg="white" p="4" borderRadius="md">
            <Text>Entrega 1</Text>
          </Box>
        </Pressable>
      </VStack>

      <VStack mt="8" space="2">
        <Heading size="md">Entregas recentes</Heading>

        <Pressable>
          <Box bg="white" p="4" borderRadius="md">
            <Text>Pedido 1</Text>
          </Box>
        </Pressable>
      </VStack>
    </ScreenContainer>
  );
}
