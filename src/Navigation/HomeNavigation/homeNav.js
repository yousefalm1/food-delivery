import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home';
import ROUTE from '..';
import Menu from '../../screens/menu';
import FoodDetails from '../../screens/foodDetails';
import Cart from '../../screens/cart';
import Categories from '../../screens/Categoires';
import Profile from '../../screens/ProfilePage';
import ChefsFav from '../../screens/ChefsFav';
import OrderHistory from '../../screens/OrderHistory';
import RewardsPage from '../../screens/RewardsPage';
import RedeemRewards from '../../screens/RedeemRewards';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';
import { deleteToken } from '../../api/storage';
import PaymentMethods from '../../screens/PaymentMethods';
import Chef2 from '../../screens/Chef2';
import Chef3 from '../../screens/Chef3';
import Locations from '../../screens/locations';
import CheckoutConfirm from '../../screens/Checkoutcofirm';
import OrderConfirmation from '../../screens/OrderConfirmation';
import Search from '../../screens/Search';

const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackground: () => (
          <View style={{ flex: 1, backgroundColor: '#161616' }}></View>
        ),
        headerTintColor: '#fefefe',
      }}
    >
      <Stack.Screen name={ROUTE.HOME.HOME} component={Home} />
      <Stack.Screen name={ROUTE.HOME.MENU} component={Menu} />
      <Stack.Screen name={ROUTE.HOME.FOOD_DETAILS} component={FoodDetails} />
      <Stack.Screen name={ROUTE.HOME.CART} component={Cart} />
      <Stack.Screen name={ROUTE.HOME.SEARCH} component={Search} />

      <Stack.Screen name={ROUTE.HOME.CATEGORIES} component={Categories} />
      <Stack.Screen name={ROUTE.HOME.PROFILE} component={Profile} />
      <Stack.Screen name={ROUTE.HOME.ORDER_HISTORY} component={OrderHistory} />
      <Stack.Screen name={ROUTE.HOME.REWARDS} component={RewardsPage} />
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
      <Stack.Screen name={ROUTE.HOME.LOCATIONS} component={Locations} />
      <Stack.Screen
        name={ROUTE.HOME.CHECKOUT_CONFIRM}
        component={CheckoutConfirm}
      />
      <Stack.Screen
        name={ROUTE.HOME.ORDER_CONFIRMATION}
        component={OrderConfirmation}
      />
      <Stack.Screen name={ROUTE.HOME.CHEFS_FAV} component={ChefsFav} />
    </Stack.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});
