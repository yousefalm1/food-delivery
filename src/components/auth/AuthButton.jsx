import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import React, { useRef } from 'react';

const AuthButton = ({ text, onPress }) => {
  const pressedButton = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(pressedButton, {
      toValue: 0.95,
      useNativeDriver: true,
      tension: 40,
      friction: 7,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(pressedButton, {
      toValue: 1,
      useNativeDriver: true,
      tension: 40,
      friction: 7,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={0.8}
    >
      <Animated.View
        style={[styles.signInButton, { transform: [{ scale: pressedButton }] }]}
      >
        <Text style={styles.signInButtonText}>{text}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  signInButton: {
    backgroundColor: '#FE5320',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#242424',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});
