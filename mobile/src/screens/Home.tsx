import { ScreenContainer } from '@components/ScreenContainer';
import Feather from '@expo/vector-icons/Feather';
import {
  Button,
  ScrollView,
  Icon,
  Text,
  Center,
  Heading,
  VStack,
} from 'native-base';
import { Pressable } from 'react-native';

export function Home() {
  return (
    <ScreenContainer>
      <ScrollView horizontal>
        <Button flexDir="column" p={4}>
          <Center>
            <Icon as={Feather} name="package" size="5xl" color="white" />
            <Text fontSize="md" color="white">
              Iniciar nova entrega
            </Text>
          </Center>
        </Button>
      </ScrollView>

      <VStack mt="8">
        <Heading>Entregas recentes</Heading>

        <Pressable>
          <Text>Entrega 1</Text>
        </Pressable>
      </VStack>
    </ScreenContainer>
  );
}
