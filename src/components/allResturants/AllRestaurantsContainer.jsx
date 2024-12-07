import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AllResMap from './AllResMap';
import SectionHeader from '../reuseable/SectionHeader';

const AllRestaurantsContainer = ({ restaurants }) => {
  return (
    <View style={{ marginTop: 15 }}>
      <SectionHeader mainText="All Restaurants" subText="See all" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <AllResMap restaurants={restaurants} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AllRestaurantsContainer;

const styles = StyleSheet.create({});
