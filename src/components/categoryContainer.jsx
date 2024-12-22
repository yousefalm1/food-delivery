import { View } from 'react-native';
import React from 'react';
import CategoriesList from './categoriesList';
import { useNavigation, useRoute } from '@react-navigation/native';
import ROUTE from '../Navigation/index';

const CategoryContainer = ({ categories }) => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    navigation.navigate(ROUTE.HOME.CATEGORIES, {
      categoryName: category.name,
      restaurants: category.restaurants,
    });
  };

  return (
    <View style={{ marginBottom: 25 }}>
      <CategoriesList
        categories={categories}
        onCategoryPress={handleCategoryPress}
      />
    </View>
  );
};

export default CategoryContainer;
