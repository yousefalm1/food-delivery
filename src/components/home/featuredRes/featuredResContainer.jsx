import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FeaturedResHeader from './FeaturedResHeader';
import FeaturedResList from './FeaturedResList';

const FeaturedResContainer = ({ restaurants, navigation }) => {
  const handleSeeAll = () => {
    navigation.navigate('AllRestaurants');
  };

  return (
    <View style={styles.container}>
      <FeaturedResHeader onSeeAll={handleSeeAll} />
      <FeaturedResList restaurants={restaurants} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 20,
  },
});

export default FeaturedResContainer;
