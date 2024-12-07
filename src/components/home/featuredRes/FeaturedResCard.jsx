import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Bike, Clock, Icon, Star, Timer } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import ROUTE from '../../../Navigation';
import { LinearGradient } from 'expo-linear-gradient';

const FeaturedResCard = ({ restaurant }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTE.HOME.MENU, { restaurant })}
      style={{
        backgroundColor: '#fff',
        borderRadius: 35,
        marginTop: 15,
        width: '180',
      }}
    >
      <View>
        <Image
          source={{ uri: restaurant.image }}
          style={{
            width: '100%',
            height: 130,
            borderRadius: 35,
            padding: 4,
            position: 'relative',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 2,
            elevation: 3, // For Android
          }}
        />
      </View>
      /{' '}
      <View style={{ padding: 12 }}>
        //{' '}
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 6,
            color: '#FFFFFF',
          }}
        >
          {restaurant.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 6,
          }}
        >
          <Star fill="#52ae60" stroke="#52ae60" width={16} height={16} />
          <Text style={{ color: '#52ae60', marginLeft: 4, fontSize: 14 }}>
            {restaurant.rating}
          </Text>
          <Text style={{ color: '#A0A0A0', marginLeft: 4, fontSize: 14 }}>
            • {restaurant.deliveryTime}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Bike size={14} color="#A0A0A0" />
          <Text style={{ color: '#A0A0A0', fontSize: 12, marginLeft: 4 }}>
            KD 1.000 delivery
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedResCard;

// <View style={{ padding: 12 }}>
//     <Text
//       style={{
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 6,
//         color: '#FFFFFF',
//       }}
//     >
//       {restaurant.name}
//     </Text>
//     <View
//       style={{
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 6,
//       }}
//     >
//       <Star fill="#52ae60" stroke="#52ae60" width={16} height={16} />
//       <Text style={{ color: '#52ae60', marginLeft: 4, fontSize: 14 }}>
//         {restaurant.rating}
//       </Text>
//       <Text style={{ color: '#A0A0A0', marginLeft: 4, fontSize: 14 }}>
//         • {restaurant.deliveryTime}
//       </Text>
//     </View>
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <Bike size={14} color="#A0A0A0" />
//       <Text style={{ color: '#A0A0A0', fontSize: 12, marginLeft: 4 }}>
//         KD 1.000 delivery
//       </Text>
//     </View>
//   </View>
