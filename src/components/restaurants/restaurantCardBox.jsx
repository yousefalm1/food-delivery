import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import FoodCardContent from './FoodCardContent';

const RestaurantCardBox = ({ item, restaurant, category }) => {
  return (
    <View
      style={{
        marginTop: 10,
        borderRadius: 20,
        flexDirection: 'row',
      }}
    >
      <FoodCardContent
        item={item}
        restaurant={restaurant}
        category={category}
      />
    </View>
  );
};

export default RestaurantCardBox;

const styles = StyleSheet.create({});
