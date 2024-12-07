import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import Category from './categoryBox';

const CategoriesList = ({ restaurantCategories, restaurants }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantCategories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Category category={item} restaurants={restaurants} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
