import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import restaurants from '../../assets/data/restaurant';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ChevronLeft,
  MinusIcon,
  MinusSquareIcon,
  PlusIcon,
  PlusSquareIcon,
  Star,
  ThumbsUp,
  ThumbsUpIcon,
} from 'lucide-react-native';
import RestaurantCardBox from '../components/restaurants/restaurantCardBox';
import MenuItems from '../components/restaurants/menuItems';
import { useNavigation } from '@react-navigation/native';
import AuthButton from '../components/auth/AuthButton';
import { useCart } from '../context/CartContext';
import ROUTE from '../Navigation/index';

const Menu = ({ route }) => {
  const navigation = useNavigation();

  const { cart } = useCart();

  const hasCartItems = cart.length > 0;
  const { restaurant, category } = route.params;
  console.log(restaurant);
  const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#000', flex: 1 }}>
        <View>
          <Image
            source={{ uri: restaurant.image }}
            style={{ width: '100%', height: 300 }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              top: 50,
              left: 20,
              padding: 10,
              borderRadius: 100,
              backgroundColor: '#ff5f1f',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              zIndex: 10,
            }}
          >
            <ChevronLeft size={20} color={'white'} />
          </TouchableOpacity>
          <LinearGradient
            colors={[
              'rgba(0,0,0,0)',
              'rgba(0,0,0,0.1)',
              'rgba(0,0,0,0.3)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.7)',
              'rgba(0,0,0,0.85)',
              'rgba(0,0,0,0.95)',
            ]}
            locations={[0, 0.3, 0.5, 0.65, 0.8, 0.9, 1]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 300,
            }}
          />
        </View>

        <View style={{ padding: 20 }}>
          <View>
            <Text style={{ fontWeight: '600', fontSize: 24, color: '#fff' }}>
              {restaurant.name}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <View style={{ gap: 6 }}>
              <Text style={{ color: '#5e5e5e', fontWeight: 400 }}>
                {restaurant.deliveryTime} - {restaurant.categ} - Restaurant
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 4,
                }}
              >
                <Star fill="green" stroke="green" width={18} height={18} />
                <Text style={{ color: '#52ae60', marginLeft: 4 }}>
                  {restaurant.rating} Excellent
                </Text>
              </View>
            </View>

            <View></View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontWeight: '400', fontSize: 18, color: '#fff' }}>
              Menu Items
            </Text>
          </View>

          <MenuItems
            menuItems={restaurant.items}
            restaurant={restaurant}
            category={category}
          />
        </View>
      </ScrollView>
      {hasCartItems && (
        <View
          style={{
            padding: 20,
            backgroundColor: '#121212',
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 25,
            },
            shadowOpacity: 1,
            shadowRadius: 45,
            elevation: 45,
          }}
        >
          <TouchableOpacity
            style={[styles.signInButton, { marginBottom: 20 }]}
            onPress={() => {
              navigation.navigate('TabNavigator', {
                screen: ROUTE.HOME.CART,
              });
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderRadius: 15,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '700',
                    letterSpacing: 1,
                  }}
                >
                  {cart.length}
                </Text>
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: 17,
                  }}
                >
                  View Basket
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '800',
                    fontSize: 18,
                    letterSpacing: 0.5,
                  }}
                >
                  KD {total}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  signInButton: {
    backgroundColor: '#ff5f1f',
    padding: 15,
    borderRadius: 20,
  },
});
