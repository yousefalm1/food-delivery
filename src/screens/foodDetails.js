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
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FoodDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === 'minus' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'plus') {
      setQuantity(quantity + 1);
    }
  };

  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <View>
        <Image
          source={{ uri: restaurants[0].menuItems[0].image }}
          style={{ width: '100%', height: 500 }}
        />
        <TouchableOpacity
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

      <View style={{ padding: 20, flex: 3 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text style={{ fontSize: 22, fontWeight: '600', color: '#fff' }}>
              {restaurants[0].menuItems[0].name}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <TouchableOpacity onPress={() => handleQuantity('minus')}>
              <Minus
                size={30}
                strokeWidth={1}
                fill={'#fff'}
                style={{
                  padding: 20,
                  color: 'white',
                  borderRadius: 100,
                  borderWidth: 1,
                  borderColor: 'white',
                }}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: '400', color: '#fff' }}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={() => handleQuantity('plus')}>
              <Plus
                strokeWidth={1}
                size={30}
                fill={'#fff'}
                style={{
                  padding: 20,
                  backgroundColor: 'white',
                  borderRadius: 100,
                  color: 'black',
                }}
              />
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
                fontWeight: 'bold',
                color: '#fff',
                fontWeight: 400,
              }}
            >
              {restaurants[0].rating}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Clock size={20} color={'#ff5f1f'} fill={'black'} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fff',
                fontWeight: 400,
              }}
            >
              {restaurants[0].deliveryTime}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Flame size={20} color={'#ff5f1f'} fill={'black'} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fff',
                fontWeight: 400,
              }}
            >
              4.5
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 16, color: '#5e5e5e', fontWeight: 300 }}>
            {restaurants[0].menuItems[0].description}
          </Text>
        </View>
      </View>

      <View
        style={{
          borderWidth: 0.3,
          borderColor: '#5e5e5e',
          width: '100%',
          borderStyle: 'dashed',
        }}
      ></View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#5e5e5e' }}>
            Total Amount
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '500',
              color: 'white',
              marginTop: 5,
            }}
          >
            KD {restaurants[0].menuItems[0].price}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#ff5f1f',
            width: 200,
            height: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontWeight: '400', fontSize: 18 }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>

      <Text></Text>
    </View>
  );
};

export default FoodDetails;
