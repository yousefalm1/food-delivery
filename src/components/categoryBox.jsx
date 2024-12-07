import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import categoryImages from '../../assets/data/categoryImage';

const Category = ({ category, restaurants }) => {
  return (
    <View style={styles.container}>
      <Image
        source={categoryImages[category.categoryName]}
        style={styles.image}
      />
      <Text style={styles.text}>{category.categoryName}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 6,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 13,
  },
  text: {
    color: '#b7b7b7',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 10,
  },
});
