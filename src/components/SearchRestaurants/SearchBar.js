import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { SearchIcon } from 'lucide-react-native';
const SearchBar = ({ setSearch }) => {
  return (
    <View style={{ position: 'relative' }}>
      <TextInput
        placeholder="Search restaurants, cuisines, dishes"
        onChangeText={(text) => setSearch(text)}
        style={{
          backgroundColor: '#fff',
          padding: 12,
          paddingLeft: 40,
          borderRadius: 20,
        }}
      />
      <SearchIcon
        size={22}
        strokeWidth={1.5}
        color="#7A869A"
        style={{ position: 'absolute', left: 10, top: 10 }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
