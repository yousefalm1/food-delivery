import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import SearchList from './SearchList';
import SectionHeader from '../reuseable/SectionHeader';
import ROUTE from '../../Navigation';
import SearchBar from './SearchBar';

const SearchContainer = ({ restaurants }) => {
  const [search, setSearch] = useState('');

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: '#EBECF0',
        padding: 20,
        marginTop: 40,
      }}
    >
      <SearchBar setSearch={setSearch} search={search} />
      <SearchList filteredRestaurants={filteredRestaurants} />
    </View>
  );
};

export default SearchContainer;

const styles = StyleSheet.create({});
