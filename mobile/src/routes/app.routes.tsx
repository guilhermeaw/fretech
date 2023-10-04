import Icon from '@expo/vector-icons/Feather';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { Profile } from '@screens/Profile';
import { useTheme } from 'native-base';

import { HomeStack } from './HomeStack';

type AppRoutesType = {
  home: undefined;
  profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesType>;

const Tab = createBottomTabNavigator<AppRoutesType>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.gray[500],
        tabBarInactiveTintColor: colors.gray[200],
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color }) => (
            <Icon name="package" size={iconSize} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={iconSize} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
