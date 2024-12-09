import React, { useContext, useState } from 'react';
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
import UserContext from '../context/UserContext';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';

const Login = () => {
  const { authenticated, setAuthenticated } = useContext(UserContext);

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  const { mutate } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setAuthenticated(true);
    },
  });

  const handleLogin = () => {
    console.log(userInfo);
    mutate();
  };

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
          <LongInput
            placeholder="Username"
            value={userInfo.email}
            autoCapitalize="none"
            name="email"
            required
            onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
          />
          <LongInput
            placeholder="Password"
            value={userInfo.password}
            autoCapitalize="none"
            name="password"
            required
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, password: text })
            }
          />
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

          <AuthButton text="Sign in" onPress={handleLogin} />
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
