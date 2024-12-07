import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import CategoriesList from './categoriesList';
import SectionHeader from './reuseable/SectionHeader';

const CategoryContainer = ({ restaurantCategories, restaurants }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CategoriesList restaurantCategories={restaurantCategories} />
      </ScrollView>
    </View>
  );
};

export default CategoryContainer;
