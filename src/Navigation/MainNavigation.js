import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/cart';
import ROUTE from '../Navigation/index';
import Home from '../screens/home';
import Menu from '../screens/menu';
import FoodDetails from '../screens/foodDetails';
import { HomeIcon, House, SearchIcon, ShoppingCart } from 'lucide-react-native';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#FE5320',
        tabBarLabelStyle: {
          color: '#1E1A18', // This makes the label text always gray
        },
      }}
    >
      <Tab.Screen
        name={ROUTE.HOME.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name={ROUTE.HOME.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SearchIcon color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name={ROUTE.HOME.MENU} component={Menu} /> */}
      <Tab.Screen
        name={ROUTE.HOME.CART}
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ShoppingCart color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name={ROUTE.HOME.MENU} component={Menu} />
      <Stack.Screen
        name="FoodDetails"
        component={FoodDetails}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
