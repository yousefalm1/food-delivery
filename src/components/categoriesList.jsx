import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Category from './categoryBox';

const CategoriesList = ({ restaurantCategories }) => {
  return (
    <>
      {restaurantCategories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({});
