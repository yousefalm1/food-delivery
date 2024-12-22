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
  Timer,
  ChevronRight,
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
      <ScrollView style={{ backgroundColor: '#161616', flex: 1 }}>
        <View>
          <Image
            source={{ uri: restaurant.image }}
            style={{ width: '100%', height: 300 }}
          />
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
          <LinearGradient
            colors={[
              'rgba(22,22,22,0)',
              'rgba(22,22,22,0)',
              'rgba(22,22,22,0.25)',
              'rgba(22,22,22,0.5)',
              'rgba(22,22,22,0.75)',
              'rgba(22,22,22,0.9)',
              'rgba(22,22,22,1)',
            ]}
            locations={[0, 0.2, 0.4, 0.6, 0.8, 0.9, 1]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 400,
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
              <Text
                style={{
                  color: '#5e5e5e',
                  fontWeight: 400,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Timer size={18} color="#5e5e5e" style={{ marginTop: 3 }} />{' '}
                {restaurant.deliveryTime} • Restaurant
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
            padding: 12,
            backgroundColor: '#161616',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          <TouchableOpacity
            style={[styles.cartButton]}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('TabNavigator', {
                screen: ROUTE.HOME.CART,
              });
            }}
          >
            <View style={styles.cartContent}>
              <View style={styles.leftSection}>
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{cart.length}</Text>
                </View>
                <Text style={styles.cartTotal}>KD {total}</Text>
              </View>
              <View style={styles.rightSection}>
                <Text style={styles.cartText}>View Cart</Text>
                <ChevronRight size={18} color="#FE5320" />
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
  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
  cartButton: {
    backgroundColor: '#1A1A1A',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#242424',
  },
  cartContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(254, 83, 32, 0.15)',
  },
  cartBadge: {
    backgroundColor: 'rgba(254, 83, 32, 0.15)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(254, 83, 32, 0.2)',
  },
  cartBadgeText: {
    color: '#FE5320',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  cartText: {
    color: '#FE5320',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  cartTotal: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
});
