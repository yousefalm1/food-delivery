import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/home';
import Menu from './src/screens/menu';
import FoodDetails from './src/screens/foodDetails';
import Cart from './src/screens/cart';
import WelcomePage from './src/screens/welcomePage';
import Login from './src/screens/login';
import SignUp from './src/screens/signup';
export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#121212',
        height: '100%',
        // padding: 20,
      }}
    >
      {/* <Home /> */}
      {/* <Menu /> */}
      {/* <FoodDetails /> */}
      <Cart />
      {/* <WelcomePage /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
    </SafeAreaView>
  );
}
