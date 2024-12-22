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
import PaymentMethods from '../screens/PaymentMethods';
import Chef2 from '../screens/Chef2';
import Chef3 from '../screens/Chef3';
import Locations from '../screens/locations';
import CheckoutConfirm from '../screens/Checkoutcofirm';
import OrderConfirmation from '../screens/OrderConfirmation';
import ChefsFav from '../screens/ChefsFav';

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
          paddingTop: 10,
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
      <Stack.Screen
        name={ROUTE.HOME.CATEGORIES}
        component={Categories}
        options={{
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen name={ROUTE.HOME.SEARCH} component={Search} />
      <Stack.Screen name={ROUTE.HOME.MENU} component={Menu} />
      <Stack.Screen name={ROUTE.HOME.CART} component={Cart} />

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
      <Stack.Screen name={ROUTE.HOME.REWARDS} component={RewardsPage} />
      <Stack.Screen name={ROUTE.HOME.ORDER_HISTORY} component={OrderHistory} />

      <Stack.Screen
        name={ROUTE.HOME.REDEEM_REWARDS}
        component={RedeemRewards}
      />
      <Stack.Screen
        name={ROUTE.HOME.PAYMENT_METHODS}
        component={PaymentMethods}
      />
      <Stack.Screen name={ROUTE.HOME.CHEF2} component={Chef2} />
      <Stack.Screen name={ROUTE.HOME.CHEF3} component={Chef3} />
      <Stack.Screen name={ROUTE.HOME.CHEFS_FAV} component={ChefsFav} />
      <Stack.Screen name={ROUTE.HOME.LOCATIONS} component={Locations} />
      <Stack.Screen
        name={ROUTE.HOME.CHECKOUT_CONFIRM}
        component={CheckoutConfirm}
      />
      <Stack.Screen
        name={ROUTE.HOME.ORDER_CONFIRMATION}
        component={OrderConfirmation}
      />

      <Stack.Screen name={ROUTE.HOME.HOME} component={HomeNav} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
