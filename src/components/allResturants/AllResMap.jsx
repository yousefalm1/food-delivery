import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RestaurantCard from './RestaurantCard';

const AllResMap = ({ restaurants }) => {
  return (
    <>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </>
  );
};

export default AllResMap;

const styles = StyleSheet.create({});
