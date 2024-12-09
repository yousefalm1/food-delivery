import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
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
        <LongInput
          placeholder="Username"
          value={userInfo.username}
          autoCapitalize="none"
          secureTextEntry={false}
          onChangeText={(text) => {
            console.log('Username changed:', text);
            setUserInfo({ ...userInfo, username: text });
          }}
          name="username"
        />
        <LongInput
          placeholder="Password"
          name="password"
          value={userInfo.password}
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) => {
            console.log('Password changed:', text);
            setUserInfo({ ...userInfo, password: text });
          }}
        />
        <TouchableOpacity style={{ marginTop: 20 }} onPress={pickImage}>
          <Text style={{ fontSize: 16 }}>Upload Profile Image</Text>
        </TouchableOpacity>
      </View>
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 100,
            height: 100,
          }}
        />
      )}

      <View style={styles.footerContainer}>
        <Text style={styles.registerText}>
          Already have an account?
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTE.AUTH.LOGIN)}
          >
            <Text style={styles.registerLink}>Log in</Text>
          </TouchableOpacity>
        </Text>
        <AuthButton text="Sign in" onPress={handleRegister} />
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
