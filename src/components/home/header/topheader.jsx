import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  ChevronDown,
  Heart,
  Navigation,
  ShoppingCart,
  User,
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import ROUTE from '../../../Navigation';
import { useCart } from '../../../context/CartContext';

const TopHeader = () => {
  const navigation = useNavigation();
  const { cart } = useCart();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#ff5f1f',
        marginTop: 50,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        <Text style={{ color: '#fefefe', fontWeight: '300', fontSize: 15 }}>
          Deliver to{' '}
          <Text style={{ fontWeight: 'bold' }}>1 Street, Jabriya</Text>
        </Text>
        <ChevronDown size={22} color="#ff5f1f" strokeWidth={2} />
      </View>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE.HOME.CART)}
          style={{
            padding: 10,
            borderRadius: 100,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}
        >
          <ShoppingCart
            style={{ color: 'black' }}
            size={16}
            fill="black"
            strokeWidth={1.5}
          />
          {cart.length > 0 && (
            <View
              style={{
                position: 'absolute',
                right: -5,
                top: -5,
                backgroundColor: '#ff5f1f',
                borderRadius: 10,
                minWidth: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}
              >
                {cart.length}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopHeader;
