import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FeaturedResHeader = () => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 5,
          color: 'white',
        }}
      >
        Featured{' '}
      </Text>
      <Text style={{ fontSize: 14, color: 'gray' }}>
        Payed Placement by our partners
      </Text>
    </View>
  );
};

export default FeaturedResHeader;
