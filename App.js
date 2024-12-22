import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/Navigation/AuthNav/authNav';
import MainNavigation from './src/Navigation/MainNavigation';
import { CartProvider } from './src/context/CartContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import UserContext from './src/context/UserContext';
import { getToken } from './src/api/storage';
import { useFonts } from 'expo-font';

export default function App() {
  const queryClient = new QueryClient();
  const [authenticated, setAuthenticated] = useState(false);

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'), // Weight: 400
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'), // Weight: 500
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'), // Weight: 700
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'), // Weight: 600
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'), // Weight: 300
    'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'), // Weight: 200
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'), // Weight: 100
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'), // Weight: 900
  });

  const checkToken = async () => {
    const token = await getToken();
    if (token) setAuthenticated(true);
  };

  useEffect(() => {
    checkToken();
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar style="light" />
        <UserContext.Provider value={{ authenticated, setAuthenticated }}>
          <CartProvider>
            <View style={{ flex: 1 }}>
              {authenticated ? <MainNavigation /> : <AuthNavigation />}
            </View>
          </CartProvider>
        </UserContext.Provider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
