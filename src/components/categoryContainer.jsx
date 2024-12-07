import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import CategoriesList from './categoriesList';
import SectionHeader from './reuseable/SectionHeader';

const CategoryContainer = ({ restaurantCategories, restaurants }) => {
  return (
    <>
      <SectionHeader mainText="Category" subText="See all" />;
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5 }}
      >
        <CategoriesList
          restaurantCategories={restaurantCategories}
          restaurants={restaurants}
        />
      </ScrollView>
    </>
  );
};

export default CategoryContainer;
