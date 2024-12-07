import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import LongInput from '../components/auth/longInput';
import AuthButton from '../components/auth/AuthButton';
import { useNavigation } from '@react-navigation/native';
import ROUTE from '../Navigation';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <ChevronLeft size={28} color="#ff5f1f" />
      </TouchableOpacity> */}

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Let's sign you in.</Text>
          <Text style={styles.subHeaderText}>Welcome back,</Text>
          <Text style={styles.subHeaderText}>
            your next meal is just a tap away.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <LongInput placeholder="Phone, email or username" />
          <LongInput placeholder="Password" />
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.registerText}>
            Don't have an account?
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTE.AUTH.REGISTER)}
            >
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </Text>

          <AuthButton text="Sign in" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  backButton: {
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
  },
  headerContainer: {
    marginBottom: 40,
  },
  headerText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '600',
  },
  subHeaderText: {
    color: '#fefefe',
    fontSize: 30,
    fontWeight: '300',
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 40,
  },

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
});

export default Login;
