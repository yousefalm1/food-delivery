import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SectionHeader = ({ mainText, subText }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
      }}
    >
      <Text style={{ color: '#1e1a18', fontSize: 20, fontWeight: '700' }}>
        {mainText}
      </Text>
      <Text style={{ color: '#FE5320', fontSize: 12, fontWeight: '400' }}>
        {subText}
      </Text>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});
