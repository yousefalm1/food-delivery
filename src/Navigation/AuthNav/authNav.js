import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/login';
import SignUp from '../../screens/signup';
import ROUTE from '..';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
          <View style={{ flex: 1, backgroundColor: '#121212' }}></View>
        ),
        headerTintColor: '#fefefe',
      }}
    >
      <Stack.Screen name={ROUTE.AUTH.LOGIN} component={Login} />
      <Stack.Screen name={ROUTE.AUTH.REGISTER} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
