import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Star } from 'lucide-react-native';

const FeaturedResCard = ({ restaurant }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#1E1E1E',
        borderRadius: 3,
        marginRight: 16,
        width: 250,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Image
        source={{ uri: restaurant.image }}
        style={{
          width: '100%',
          height: 150,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      <View style={{ padding: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 4,
            color: '#FFFFFF',
          }}
        >
          {restaurant.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 4,
          }}
        >
          <Star fill="#52ae60" stroke="#52ae60" width={18} height={18} />
          <Text style={{ color: '#52ae60', marginLeft: 4 }}>
            {restaurant.rating} Excellent -
            <Text style={{ color: '#A0A0A0' }}>{restaurant.deliveryTime}</Text>
          </Text>
        </View>
        <Text style={{ color: '#A0A0A0', fontSize: 12 }}>
          KD 1.000 delivery
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedResCard;
