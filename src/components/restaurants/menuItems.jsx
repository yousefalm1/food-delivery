import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RestaurantCardBox from './restaurantCardBox';

const MenuItems = ({ restaurants }) => {
  return (
    <>
      {restaurants.map((restaurant) => (
        <RestaurantCardBox restaurant={restaurant} key={restaurant.id} />
      ))}
    </>
  );
};

export default MenuItems;

const styles = StyleSheet.create({});
