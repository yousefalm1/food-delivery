import { View } from 'react-native';
import React from 'react';
import CategoriesList from './categoriesList';
import { useNavigation } from '@react-navigation/native';

const CategoryContainer = ({ categories }) => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    navigation.navigate(ROUTE.HOME.CATEGORIES, {
      categoryName: category.name,
      restaurants: category.restaurants,
    });
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <CategoriesList
        categories={categories}
        onCategoryPress={handleCategoryPress}
      />
    </View>
  );
};

export default CategoryContainer;
