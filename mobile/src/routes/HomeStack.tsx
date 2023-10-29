import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { CompleteOrderCamera } from '@screens/CompleteOrderCamera';
import { Map } from '@screens/Map';
import { Orders } from '@screens/Orders';

type AppRoutesType = {
  completeOrderCamera: undefined;
  orders: undefined;
  map: undefined;
};

export type HomeStackNavigatorProps = StackNavigationProp<AppRoutesType>;

const Stack = createStackNavigator<AppRoutesType>();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="orders"
        component={Orders}
        options={{ headerTitle: 'Entregas' }}
      />

      <Stack.Screen
        name="map"
        component={Map}
        options={{ headerTitle: 'Rota de entrega' }}
      />

      <Stack.Screen
        name="completeOrderCamera"
        component={CompleteOrderCamera}
        options={{ headerTitle: 'Assinatura do destinatário' }}
      />
    </Stack.Navigator>
  );
}
