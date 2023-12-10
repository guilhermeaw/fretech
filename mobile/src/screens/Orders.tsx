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
  View,
  Image,
} from 'native-base';
import { StyleSheet } from 'react-native';

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
        <Heading size="md">Em andamento</Heading>
        <Pressable>
          <View style={styles.container}>
            <Image
              source={require('../../assets/images/box-truck.png')}
              style={{ width: 50, height: 50, marginRight: 12 }}
            />
            <View style={styles.textContainer}>
              <Text style={[styles.boldText, styles.largeText]}>
                Entrega #758463
              </Text>
              <Text style={[styles.normalText, { marginBottom: 5 }]}>
                Renault master
              </Text>
              <Text style={[styles.boldText, styles.largeText]}>
                Seg, 24 setembro
              </Text>
              <Text style={styles.normalText}>7 pedidos</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Pressable
                onPress={() => {
                  // continuar
                }}
              >
                <Text style={styles.underlineText}>Continuar</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </VStack>

      <VStack mt="8" space="2">
        <Heading size="md">Próximas entregas</Heading>

        <Pressable>
          <Box
            bg="white"
            p="4"
            borderRadius="md"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 12,
            }}
          >
            <Image
              source={require('../../assets/images/box.png')}
              style={{ width: 50, height: 50 }}
            />
            <View style={styles.textContainer}>
              <Text>Pedido #758464</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Pressable
                onPress={() => {
                  // visualizar pedido
                }}
              >
                <Text style={[styles.underlineText, { fontSize: 18 }]}>
                  {' > '}
                </Text>
              </Pressable>
            </View>
          </Box>
        </Pressable>
      </VStack>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  icon: {
    width: 50,
    height: 50,
  },
  textContainer: {
    marginLeft: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  largeText: {
    fontSize: 16,
  },
  normalText: {
    fontSize: 12,
  },
  underlineText: {
    color: 'blue',
  },
});
