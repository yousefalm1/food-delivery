import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text as RNText, View } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/home';
import Menu from './src/screens/menu';
import FoodDetails from './src/screens/foodDetails';
import Cart from './src/screens/cart';
import WelcomePage from './src/screens/welcomePage';
import Login from './src/screens/login';
import SignUp from './src/screens/signup';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/Navigation/AuthNav/authNav';
import HomeNav from './src/Navigation/HomeNavigation/homeNav';
import MainNavigation from './src/Navigation/MainNavigation';
import { CartProvider } from './src/context/CartContext';

// Create a custom Text component
export const Text = (props) => {
  const getFontFamily = () => {
    switch (props.weight) {
      case 'light':
        return 'Anuphan-Light';
      case 'medium':
        return 'Anuphan-Medium';
      case 'semibold':
        return 'Anuphan-SemiBold';
      case 'bold':
        return 'Anuphan-Bold';
      case 'extrabold':
        return 'Anuphan-ExtraBold';
      default:
        return 'Anuphan';
    }
  };

  return (
    <RNText style={[{ fontFamily: getFontFamily() }, props.style]}>
      {props.children}
    </RNText>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Anuphan: require('./assets/fonts/Anuphan-Regular.ttf'),
    'Anuphan-Light': require('./assets/fonts/Anuphan-Light.ttf'),
    'Anuphan-Medium': require('./assets/fonts/Anuphan-Medium.ttf'),
    'Anuphan-SemiBold': require('./assets/fonts/Anuphan-SemiBold.ttf'),
    'Anuphan-Bold': require('./assets/fonts/Anuphan-Bold.ttf'),
    // 'Anuphan-ExtraBold': require('./assets/fonts/Anuphan-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <CartProvider>
        <View style={{ flex: 1 }}>
          <MainNavigation />
        </View>
      </CartProvider>
    </NavigationContainer>
  );
}
