import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ROUTE from '../../Navigation/index';
import { Text } from '../../../App';
import { useNavigation } from '@react-navigation/native';
const COLORS = {
  white: '#FFFFFF',
  orange: '#FE5320',
  gray: '#7A869A',
};

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTE.HOME.MENU, { restaurant })}
      key={restaurant.id}
      style={styles.container}
    >
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.deliveryFee}>kD 0 Delivery fee</Text>
          <Text style={styles.category}>· {restaurant.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginVertical: 8,
    padding: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 35,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '700',
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  deliveryFee: {
    color: COLORS.orange,
    fontWeight: '400',
    fontSize: 13,
    marginRight: 20,
  },
  category: {
    color: COLORS.gray,
    fontWeight: '400',
    fontSize: 13,
  },
});

export default RestaurantItem;
