import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const LongInput = ({ placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="gray"
      style={styles.input}
    />
  );
};

export default LongInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    color: '#fefefe',
    backgroundColor: '#1e1c23',
    padding: 20,
    borderColor: '#535259',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
  },
});
