import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Category from './categoryBox';

const CategoriesList = ({ restaurantCategories, restaurants }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 10 }}>
      {restaurantCategories.map((category) => {
        return (
          <Category
            key={category.id}
            category={category}
            restaurants={restaurants}
          />
        );
      })}
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({});
