import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react-native';

const SearchSection = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#2f2f2f',
          padding: 15,
          marginTop: 15,
          borderRadius: 10,
          width: '100%',
        }}
      >
        <Search
          size={20}
          strokeWidth={1}
          style={{ color: '#747474', marginRight: 10, color: 'white' }}
        />
        <TextInput
          placeholder="Search food, drink, restaurant"
          style={{ color: 'white' }}
          placeholderTextColor="#747474"
        />
        {/* <SlidersHorizontal color="black" /> */}
      </View>
    </View>
  );
};

export default SearchSection;

const styles = StyleSheet.create({});
