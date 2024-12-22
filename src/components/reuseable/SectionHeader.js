import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SectionHeader = ({ mainText, subText }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
      }}
    >
      <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Poppins-Bold' }}>
        {mainText}
      </Text>
      <Text
        style={{
          color: '#FE5320',
          fontSize: 12,
          fontFamily: 'Poppins-Regular',
        }}
      >
        {subText}
      </Text>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});
