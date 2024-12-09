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
import dishesBetterImages from '../../../assets/data/BetterImage';
// import restaurants from '../../../assets/data/restaurant';
import {
  AlarmClock,
  Clock,
  Plus,
  PlusCircle,
  Timer,
} from 'lucide-react-native';

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
        backgroundColor: '#161616',
        padding: 16,
        flex: 1,

        paddingTop: 50,
      }}
    >
      <SearchBar setSearch={setSearch} search={search} />

      <SearchList filteredRestaurants={filteredRestaurants} />
    </View>
  );
};

export default SearchContainer;

const styles = StyleSheet.create({});
