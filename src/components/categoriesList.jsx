import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import Category from './categoryBox';

const CategoriesList = ({ categories, onCategoryPress }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      >
        {categories?.map((category, index) => (
          <Category key={index} category={category} onPress={onCategoryPress} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
