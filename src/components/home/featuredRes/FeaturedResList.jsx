import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import FeaturedResCard from './FeaturedResCard';

const FeaturedResList = ({ restaurants }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {restaurants.map((restaurant, index) => (
        <FeaturedResCard restaurant={restaurant} key={index} />
      ))}
    </ScrollView>
  );
};

export default FeaturedResList;

const styles = StyleSheet.create({});
