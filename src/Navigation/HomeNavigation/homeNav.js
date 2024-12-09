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
      <Stack.Screen name={ROUTE.HOME.CATEGORIES} component={Categories} />
      <Stack.Screen name={ROUTE.HOME.PROFILE} component={Profile} />
      <Stack.Screen name={ROUTE.HOME.CHEFS_FAV} component={ChefsFav} />
      <Stack.Screen name={ROUTE.HOME.ORDER_HISTORY} component={OrderHistory} />
      <Stack.Screen name={ROUTE.HOME.REWARDS} component={RewardsPage} />
      <Stack.Screen
        name={ROUTE.HOME.REDEEM_REWARDS}
        component={RedeemRewards}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});
