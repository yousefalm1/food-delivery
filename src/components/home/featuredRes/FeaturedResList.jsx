import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import FeaturedResCard from './FeaturedResCard';

const FeaturedResList = ({ restaurants }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginHorizontal: -20 }}
      contentContainerStyle={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 15,
      }}
    >
      {restaurants.map((restaurant, index) => (
        <FeaturedResCard restaurant={restaurant} key={index} />
      ))}
    </ScrollView>
  );
};

export default FeaturedResList;

const styles = StyleSheet.create({});
