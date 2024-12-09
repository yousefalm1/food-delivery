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

export default function App() {
  const queryClient = new QueryClient();
  const [authenticated, setAuthenticated] = useState(false);

  const checkToken = async () => {
    const token = await getToken();
    if (token) setAuthenticated(true);
  };

  useEffect(() => {
    checkToken();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar style="light" />
        <UserContext.Provider value={[authenticated, setAuthenticated]}>
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
