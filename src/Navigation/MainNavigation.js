import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/cart';
import ROUTE from '../Navigation/index';
import Home from '../screens/home';
import Menu from '../screens/menu';
import FoodDetails from '../screens/foodDetails';
import {
  HomeIcon,
  House,
  SearchIcon,
  ShoppingCart,
  User,
  User2,
  UserX2,
} from 'lucide-react-native';
import Search from '../screens/Search';
import Categories from '../screens/Categoires';
import HomeNav from './HomeNavigation/homeNav';
import Profile from '../screens/ProfilePage';
import RewardsPage from '../screens/RewardsPage';
import OrderHistory from '../screens/OrderHistory';
import RedeemRewards from '../screens/RedeemRewards';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#161616',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#FE5320',
        tabBarLabelStyle: {
          color: '#1E1A18',
        },
      }}
    >
      <Tab.Screen
        name={ROUTE.HOME.HOME}
        component={HomeNav}
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
      <Tab.Screen
        name={ROUTE.HOME.CART}
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ShoppingCart color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE.HOME.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <User2 color={color} size={size} />,
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
        name={ROUTE.HOME.FOOD_DETAILS}
        component={FoodDetails}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          cardStyle: { backgroundColor: '#121212' },
          gestureEnabled: true,
          gestureDirection: 'vertical',
          cardOverlayEnabled: true,
          animationEnabled: true,
        }}
      />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name={ROUTE.HOME.REWARDS} component={RewardsPage} />
      <Stack.Screen name={ROUTE.HOME.ORDER_HISTORY} component={OrderHistory} />
      <Stack.Screen
        name={ROUTE.HOME.REDEEM_REWARDS}
        component={RedeemRewards}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
