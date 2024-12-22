import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import restaurants from '../../assets/data/restaurant';
import {
  ArrowLeftIcon,
  ChevronLeft,
  Clock,
  Flame,
  Minus,
  MinusCircle,
  MinusCircleIcon,
  MinusIcon,
  Plus,
  PlusCircleIcon,
  PlusIcon,
  StarIcon,
  ChevronRight,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';

const FoodDetails = ({ route }) => {
  const navigation = useNavigation();
  const { item, restaurant } = route.params;
  const { addToCart } = useCart();
  console.log(item);

  const [quantity, setQuantity] = useState(1);
  const totalPrice = item.price * quantity;

  const handleQuantity = (type) => {
    if (type === 'minus' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'plus') {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(item, quantity, totalPrice);
    navigation.goBack();
  };

  return (
    <View style={{ backgroundColor: '#161616', flex: 1 }}>
      <View>
        <Image
          source={{ uri: item.image }}
          style={{ width: '100%', height: 500 }}
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
            height: 300,
          }}
        />
      </View>

      <View style={{ padding: 20, flex: 3 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
                color: '#fff',
              }}
            >
              {item.name}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <TouchableOpacity
              onPress={() => handleQuantity('minus')}
              style={[
                styles.quantityButton,
                { opacity: quantity <= 1 ? 0.5 : 1 },
              ]}
            >
              <Minus
                size={24}
                strokeWidth={2}
                color={quantity <= 1 ? '#666' : '#FE5320'}
              />
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => handleQuantity('plus')}
              style={[styles.quantityButton, { backgroundColor: '#FE5320' }]}
            >
              <Plus size={24} strokeWidth={2} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 25,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <StarIcon size={20} color={'#ff5f1f'} fill={'black'} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-Bold',
                color: '#fff',
                fontWeight: 400,
              }}
            >
              {restaurant.rating}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Clock size={20} color={'#ff5f1f'} fill={'black'} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-Bold',
                color: '#fff',
                fontWeight: 400,
              }}
            >
              {restaurant.deliveryTime}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Flame size={20} color={'#ff5f1f'} fill={'black'} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-Bold',
                color: '#fff',
                fontWeight: 400,
              }}
            >
              4.5
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 16,
              color: '#5e5e5e',
              fontFamily: 'Poppins-light',
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginVertical: 10,
          backgroundColor: '#161616',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 5,
          borderTopWidth: 0.5,
          borderColor: '#242424',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#5e5e5e',
            }}
          >
            Total Amount
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: 'white',
              marginTop: 2,
            }}
          >
            KD {totalPrice}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleAddToCart}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            backgroundColor: 'rgba(254, 83, 32, 0.1)',
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: 'rgba(254, 83, 32, 0.15)',
          }}
        >
          <Text
            style={{
              color: '#FE5320',
              fontSize: 14,
              fontFamily: 'Poppins-Bold',
              marginRight: 6,
            }}
          >
            Add to cart
          </Text>
          <ChevronRight size={16} color="#FE5320" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
  quantityText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    minWidth: 10,
    textAlign: 'center',
  },
});

export default FoodDetails;
