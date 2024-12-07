import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import LongInput from '../components/auth/longInput';
import AuthButton from '../components/auth/AuthButton';
import { useNavigation } from '@react-navigation/native';
import ROUTE from '../Navigation';

const SignUp = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={28} color="#ff5f1f" />
        </TouchableOpacity>
        <Text style={styles.title}>Join Us Today</Text>
        <Text style={styles.subtitle}>
          Sign up to explore delicious food delivered to your door.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <LongInput placeholder="Username" />
        <LongInput placeholder="Email" />
        <LongInput placeholder="Password" secureTextEntry />
        <LongInput placeholder="Confirm password" secureTextEntry />
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.registerText}>
          Already have an account?
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTE.AUTH.LOGIN)}
          >
            <Text style={styles.registerLink}>Log in</Text>
          </TouchableOpacity>
        </Text>
        <AuthButton text="Sign in" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  registerText: {
    color: '#fefefe',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
  },
  registerLink: {
    color: '#ff5f1f',
    marginLeft: 5,
    marginBottom: -3,
    fontWeight: '600',
  },
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    marginBottom: 30,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    color: '#fefefe',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fefefe',
    fontSize: 18,
    marginTop: 8,
    opacity: 0.8,
  },
  inputContainer: {
    marginBottom: 30,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  loginLink: {
    alignItems: 'center',
  },
  loginLinkText: {
    color: '#ff5f1f',
    fontSize: 16,
    fontWeight: '600',
  },
});
