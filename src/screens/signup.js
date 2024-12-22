import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import LongInput from '../components/auth/longInput';
import AuthButton from '../components/auth/AuthButton';
import { useNavigation } from '@react-navigation/native';
import ROUTE from '../Navigation';
import UserContext from '../context/UserContext';
import { useMutation } from '@tanstack/react-query';
import { register } from '../api/auth';
import * as ImagePicker from 'expo-image-picker';

const SignUp = () => {
  const navigation = useNavigation();

  const { authenticated, setAuthenticated } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  const [image, setImage] = useState(null);

  const { mutate } = useMutation({
    mutationFn: () => {
      register(userInfo, image);
    },
    onSuccess: () => {
      console.log('Registration successful:');
      setAuthenticated(true);
    },
    onError: (error) => {
      console.log(
        'Registration failed:',
        error.response?.data || error.message
      );
      console.log('Full error:', error);
    },
  });
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const handleRegister = () => {
    mutate();
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          top: 65,
          left: 20,
          zIndex: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonStyle}
        >
          <ChevronLeft size={20} color="#FE5320" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>يبيلها</Text>
          <Text style={styles.logoTextLatin}>YABELA</Text>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Create Account</Text>
          <Text style={styles.headerText}>Sign Up</Text>
          <Text style={styles.subHeaderText}>
            Please fill in your information
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor="gray"
            style={styles.input}
            placeholder="Username"
            value={userInfo.username}
            autoCapitalize="none"
            secureTextEntry={false}
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, username: text })
            }
            name="username"
          />
          <TextInput
            placeholderTextColor="gray"
            style={styles.input}
            placeholder="Password"
            name="password"
            value={userInfo.password}
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(text) =>
              setUserInfo({ ...userInfo, password: text })
            }
          />
          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            <Text style={styles.uploadText}>Upload Profile Image</Text>
          </TouchableOpacity>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 100,
                height: 100,
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 50,
              }}
            />
          )}
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

          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleRegister}
          >
            <Text style={styles.signInText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#161616',
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
  inputContainer: {
    marginBottom: 40,
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
  uploadButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  uploadText: {
    color: '#FE5320',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  registerText: {
    color: '#aaa',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.2,
  },
  registerLink: {
    color: '#FE5320',
    marginLeft: 5,
    marginBottom: -3,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.3,
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
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
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
});
