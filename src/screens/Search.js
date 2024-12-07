import {
  StyleSheet,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchIcon } from 'lucide-react-native';
import restaurants from '../../assets/data/restaurant';
import { Text } from '../../App';
import SectionHeader from '../components/reuseable/SectionHeader';
import ROUTE from '../Navigation/index';
import SearchContainer from '../components/SearchRestaurants/SearchContainer';

const Search = () => {
  return <SearchContainer restaurants={restaurants} />;
};

export default Search;

const styles = StyleSheet.create({});
