import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import SectionHeader from '../reuseable/SectionHeader';
import SearchCard from './SearchCard';

const SearchList = ({ filteredRestaurants }) => {
  return (
    <ScrollView
      style={{ marginVertical: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <SectionHeader
        mainText="Cuisines and Restaurants"
        subText={`${filteredRestaurants.length} results`}
      />
      {filteredRestaurants.map((restaurant) => (
        <SearchCard restaurant={restaurant} key={restaurant.id} />
      ))}
    </ScrollView>
  );
};

export default SearchList;

const styles = StyleSheet.create({});
