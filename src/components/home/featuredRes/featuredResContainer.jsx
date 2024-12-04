import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FeaturedResHeader from './FeaturedResHeader';
import FeaturedResList from './FeaturedResList';

const FeaturedResContainer = ({ restaurants }) => {
  return (
    <View style={{ marginVertical: 20, gap: 2 }}>
      <FeaturedResHeader />
      <FeaturedResList restaurants={restaurants} />
    </View>
  );
};

export default FeaturedResContainer;
