import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home';
import ROUTE from '..';
import Menu from '../../screens/menu';
import FoodDetails from '../../screens/foodDetails';
import Cart from '../../screens/cart';

const HomeNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
          <View style={{ flex: 1, backgroundColor: '#121212' }}></View>
        ),
        headerTintColor: '#fefefe',
      }}
    >
      <Stack.Screen name={ROUTE.HOME.HOME} component={Home} />
      <Stack.Screen name={ROUTE.HOME.MENU} component={Menu} />
      <Stack.Screen name={ROUTE.HOME.FOOD_DETAILS} component={FoodDetails} />
      <Stack.Screen name={ROUTE.HOME.CART} component={Cart} />
    </Stack.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});
