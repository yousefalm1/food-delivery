import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RestaurantCardBox from './restaurantCardBox';

const MenuItems = ({ menuItems, restaurant, category }) => {
  return (
    <>
      {menuItems.map((item) => (
        <RestaurantCardBox
          item={item}
          key={item.id}
          restaurant={restaurant}
          category={category}
        />
      ))}
    </>
  );
};

export default MenuItems;

const styles = StyleSheet.create({});
