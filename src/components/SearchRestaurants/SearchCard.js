import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ROUTE from '../../Navigation/index';
import { Text } from '../../../App';
import dishesBetterImages from '../../../assets/data/BetterImage';
import { useNavigation } from '@react-navigation/native';

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();
  return (
    // <TouchableOpacity
    //   onPress={() => navigation.navigate(ROUTE.HOME.MENU, { restaurant })}
    //   key={restaurant.id}
    //   style={styles.container}
    // >
    //   <Image source={{ uri: restaurant.image }} style={styles.image} />
    //   <View style={styles.infoContainer}>
    //     <Text style={styles.restaurantName}>{restaurant.name}</Text>
    //     <View style={styles.detailsContainer}>
    //       <Text style={styles.deliveryFee}>Free Delivery</Text>
    //       <Text style={styles.category}>· {restaurant.category}</Text>
    //     </View>
    //   </View>
    // </TouchableOpacity>

    <View style={{}}></View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#222222',
//     marginVertical: 8,
//     padding: 16,
//     borderRadius: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   image: {
//     width: 70,
//     height: 70,
//     borderRadius: 15,
//   },
//   infoContainer: {
//     flex: 1,
//     marginLeft: 15,
//   },
//   restaurantName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#fff',
//   },
//   detailsContainer: {
//     flexDirection: 'row',
//     marginTop: 6,
//     alignItems: 'center',
//   },
//   deliveryFee: {
//     color: '#ff5f1f',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   category: {
//     color: '#a0a0a0',
//     fontWeight: '400',
//     fontSize: 12,
//     marginLeft: 8,
//   },
// });

export default RestaurantItem;
