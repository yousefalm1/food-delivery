import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import RestaurantCardContent from './restaurantCardContent';

const RestaurantCardBox = ({ restaurant }) => {
  return (
    <View
      style={{
        marginTop: 10,
        borderRadius: 20,
        flexDirection: 'row',
      }}
    >
      <RestaurantCardContent restaurant={restaurant} />
    </View>
  );
};

export default RestaurantCardBox;

const styles = StyleSheet.create({});
