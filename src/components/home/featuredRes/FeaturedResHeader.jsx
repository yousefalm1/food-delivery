import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SectionHeader from '../../reuseable/SectionHeader';

const FeaturedResHeader = ({ onSeeAll }) => {
  return (
    <SectionHeader
      mainText="Featured Restaurants"
      subText="See all"
      onPress={onSeeAll}
    />
  );
};

export default FeaturedResHeader;
