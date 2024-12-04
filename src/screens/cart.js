import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { ChevronLeft, Minus, Plus, Trash2 } from 'lucide-react-native';
import restaurants from '../../assets/data/restaurant';
import AuthButton from '../components/auth/AuthButton';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  // const [subtotal, setSubtotal] = useState(10);
  // const [fee, setFee] = useState(0);

  // const calculateFee = (subtotal) => {
  //   setFee(subtotal * 0.3);
  // };

  const handleQuantity = (type) => {
    if (type === 'minus' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'plus') {
      setQuantity(quantity + 1);
    }
  };

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: '#121212' }}>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}
      >
        <TouchableOpacity style={{ position: 'absolute', left: 0 }}>
          <ChevronLeft size={28} color="#ff5f1f" />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: '600' }}>
            Checkout
          </Text>
        </View>
      </View>

      <ScrollView>
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
            borderWidth: 0.5,
            borderColor: '#2A2A2A',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image
                source={{ uri: restaurants[0].menuItems[0].image }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  marginRight: 15,
                }}
              />
            </View>

            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: '400' }}>
                {restaurants[0].menuItems[0].name}
              </Text>
              <Text style={{ color: '#aaa', fontSize: 14, fontWeight: '600' }}>
                KD {restaurants[0].menuItems[0].price}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: '#ff5f1f',
                borderRadius: 10,
              }}
              onPress={() => handleQuantity('minus')}
            >
              <Minus size={16} color="#fff" />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
              {quantity}
            </Text>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: '#ff5f1f',
                borderRadius: 10,
              }}
              onPress={() => handleQuantity('plus')}
            >
              <Plus size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
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
            borderWidth: 0.5,
            borderColor: '#2A2A2A',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image
                source={{ uri: restaurants[0].menuItems[0].image }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  marginRight: 15,
                }}
              />
            </View>

            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: '400' }}>
                {restaurants[0].menuItems[0].name}
              </Text>
              <Text style={{ color: '#aaa', fontSize: 14, fontWeight: '600' }}>
                KD {restaurants[0].menuItems[0].price}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: '',
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 0.5,
              }}
              onPress={() => handleQuantity('minus')}
            >
              <Minus size={16} color="#fff" />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
              {quantity}
            </Text>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: '',
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 0.5,
              }}
              onPress={() => handleQuantity('plus')}
            >
              <Plus size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#1E1E1E',
          borderRadius: 20,
          padding: 15,
          marginBottom: 15,
        }}
      >
        <Image
          source={{ uri: restaurants[0].menuItems[0].image }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 8,
            marginRight: 15,
          }}
        />
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 5,
            }}
          >
            {restaurants[0].menuItems[0].name}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#aaa', fontSize: 16, fontWeight: 'bold' }}>
              KD {restaurants[0].menuItems[0].price}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#ff5f1f',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
              }}
            >
              <TouchableOpacity>
                <Minus size={20} color="#fff" />
              </TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  marginHorizontal: 10,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
              >
                1
              </Text>
              <TouchableOpacity>
                <Plus size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View> */}

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
              KD 12
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
              KD 2
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
              KD 14
            </Text>
          </View>
        </View>
      </View>
      <AuthButton text="Checkout" style={{ marginTop: 20 }} />
    </View>
  );
};

export default Cart;
