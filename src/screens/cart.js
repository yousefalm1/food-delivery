import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ChevronLeft, Minus, Plus, Trash2 } from 'lucide-react-native';
import restaurants from '../../assets/data/restaurant';
import AuthButton from '../components/auth/AuthButton';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const navigation = useNavigation();
  const { cart } = useCart();
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const fee = (subtotal * 0.05).toFixed(2);
  const total = subtotal + fee;

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: '#121212' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 40,
          marginTop: 40,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
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
          <ChevronLeft size={20} color="white" />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: '600' }}>
            Checkout
          </Text>
        </View>
      </View>

      <ScrollView>
        {cart.map((cartItem, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 20,
              padding: 15,
              marginBottom: 15,
              backgroundColor: '#121212',
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 25,
              },
              shadowOpacity: 1,
              shadowRadius: 45,
              elevation: 45,
              borderWidth: 0.5,
              borderColor: '#2A2A2A',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Image
                  source={{ uri: cartItem.image }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    marginRight: 15,
                  }}
                />
              </View>

              <View style={{ justifyContent: 'space-between' }}>
                <Text
                  style={{ color: '#fff', fontSize: 18, fontWeight: '400' }}
                >
                  {cartItem.name}
                </Text>
                <Text
                  style={{ color: '#aaa', fontSize: 14, fontWeight: '600' }}
                >
                  KD {cartItem.price}
                </Text>
              </View>
            </View>

            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
              <TouchableOpacity
                style={{
                  padding: 5,
                  backgroundColor: '',
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 0.5,
                }}
                onPress={() => handleQuantity('minus', index)}
              >
                <Minus size={16} color="#fff" />
              </TouchableOpacity>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                {cartItem.quantity}
              </Text>
              <TouchableOpacity
                style={{
                  padding: 5,
                  backgroundColor: '',
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 0.5,
                }}
                onPress={() => handleQuantity('plus', index)}
              >
                <Plus size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text
        style={{
          color: '#fff',
          fontSize: 18,
          fontWeight: '800',
          marginBottom: 15,
        }}
      >
        Payment Summary
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 20,
          padding: 15,
          marginBottom: 15,
          backgroundColor: '#121212',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 25,
          },
          shadowOpacity: 1,
          shadowRadius: 45,
          elevation: 45,
          borderWidth: 1,
          borderColor: '#2A2A2A',
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                color: '#aaa',
                fontSize: 16,
                fontWeight: '400',
                flex: 1,
              }}
            >
              Sub Total
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
                flex: 1,
                textAlign: 'right',
              }}
            >
              KD {Number(subtotal).toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: '#aaa',
                fontSize: 16,
                fontWeight: '400',
                flex: 1,
              }}
            >
              Fee and Delivery
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
                flex: 1,
                textAlign: 'right',
              }}
            >
              KD {Number(fee).toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 0.2,
              marginTop: 20,
              marginBottom: 20,
              borderColor: '#aaa',
              width: '100%',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
                flex: 1,
              }}
            >
              Total
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
                flex: 1,
                textAlign: 'right',
              }}
            >
              KD {parseFloat(total).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
      <AuthButton text="Checkout" style={{ marginTop: 20 }} />
    </View>
  );
};

export default Cart;
