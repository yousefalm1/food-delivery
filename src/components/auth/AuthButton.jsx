import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const AuthButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.signInButton} onPress={onPress}>
      <Text style={styles.signInButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  signInButton: {
    backgroundColor: '#ff5f1f',
    padding: 20,
    borderRadius: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
