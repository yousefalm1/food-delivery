import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RestaurantCardBox from './restaurantCardBox';

const MenuItems = ({ menuItems, restaurant, category }) => {
  return (
    <>
      {menuItems.map((item, index) => (
        <RestaurantCardBox
          item={item}
          key={index}
          restaurant={restaurant}
          category={category}
        />
      ))}
    </>
  );
};

export default MenuItems;

const styles = StyleSheet.create({});
