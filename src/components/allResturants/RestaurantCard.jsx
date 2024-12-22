import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text } from '../../../App';
import { Bike, Star } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import ROUTE from '../../Navigation/index';

const RestaurantCard = ({ restaurant }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTE.HOME.MENU, { restaurant })}
      style={styles.card}
    >
      <View>
        <Image
          source={{ uri: restaurant.menuItems[0].image }}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <View style={styles.ratingContainer}>
          <Star fill="#52ae60" stroke="#52ae60" width={16} height={16} />
          <Text style={styles.rating}>{restaurant.rating}</Text>
          <Text style={styles.deliveryTime}>• {restaurant.deliveryTime}</Text>
        </View>
        <View style={styles.deliveryContainer}>
          <Bike size={14} color="#A0A0A0" />
          <Text style={styles.deliveryFee}>KD 1.000 delivery</Text>
        </View>
        <View style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 35,
    marginTop: 10,
    width: 180,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 35,
    padding: 4,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
  },
  contentContainer: {
    padding: 12,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    fontFamily: 'Poppins-Bold',
    color: '#1e1a18',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  rating: {
    color: '#52ae60',
    marginLeft: 4,
    fontSize: 14,
  },
  deliveryTime: {
    color: '#A0A0A0',
    marginLeft: 4,
    fontSize: 14,
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  deliveryFee: {
    color: '#A0A0A0',
    fontSize: 14,
    marginLeft: 4,
  },
  addToCartButton: {
    backgroundColor: '#FE5320',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default RestaurantCard;
