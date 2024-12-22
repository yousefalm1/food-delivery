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

  // console.log(userInfo);

  const handleLogin = () => {
    // console.log(userInfo);
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
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>يبيلها</Text>
          <Text style={styles.logoTextLatin}>YABELA</Text>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.headerText}>Sign In</Text>
          <Text style={styles.subHeaderText}>
            Please enter your credentials
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            value={userInfo.username}
            autoCapitalize="none"
            name="username"
            required
            placeholderTextColor="gray"
            style={styles.input}
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, username: text })
            }
          />
          <TextInput
            placeholder="Password"
            value={userInfo.password}
            autoCapitalize="none"
            name="password"
            placeholderTextColor="gray"
            style={styles.input}
            required
            secureTextEntry={true}
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

          <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#161616',
  },
  backButton: {
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  logoText: {
    color: '#FE5320',
    fontSize: 48,
    fontFamily: 'Poppins-Bold',
    marginBottom: 5,
  },
  logoTextLatin: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 8,
  },
  headerContainer: {
    marginBottom: 40,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  welcomeText: {
    color: '#888',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0.5,
    textAlign: 'center',
    marginBottom: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
    textAlign: 'center',
    marginBottom: 12,
  },
  subHeaderText: {
    color: '#666',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.3,
    textAlign: 'center',
    opacity: 0.9,
  },
  inputContainer: {
    marginBottom: 40,
  },

  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  registerText: {
    color: '#aaa',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.2,
  },
  registerLink: {
    color: '#FE5320',
    marginLeft: 5,
    marginBottom: -3,
    letterSpacing: 0.3,
    fontFamily: 'Poppins-Bold',
  },
  input: {
    width: '100%',
    color: '#fefefe',
    backgroundColor: '#222222',
    padding: 20,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#242424',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  signInText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});

export default Login;
