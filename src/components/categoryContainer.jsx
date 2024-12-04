import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import CategoriesList from './categoriesList';

const CategoryContainer = ({ restaurantCategories }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          flexDirection: 'row',
          gap: 10,
          marginTop: 10,
          alignItems: 'center',
        }}
      >
        <CategoriesList restaurantCategories={restaurantCategories} />
      </ScrollView>
    </View>
  );
};

export default CategoryContainer;

const styles = StyleSheet.create({});
