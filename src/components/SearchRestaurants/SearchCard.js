import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import ROUTE from '../../Navigation/index';
import dishesBetterImages from '../../../assets/data/BetterImage';
import { useNavigation } from '@react-navigation/native';
import { Timer } from 'lucide-react-native';

const RestaurantItem = ({ restaurant, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTE.HOME.MENU, { restaurant })}
      style={styles.container}
      key={index}
    >
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.restaurantName}>
          {typeof restaurant.name === 'object'
            ? restaurant.name.name
            : restaurant.name}
        </Text>
        <View style={styles.detailsContainer}>
          <View style={styles.timeContainer}>
            <Timer size={16} color="#fff" strokeWidth={1.5} />
            <Text style={styles.deliveryTime}>{restaurant.deliveryTime}</Text>
          </View>
          <View>
            <Text style={styles.category}>
              |{' '}
              {typeof restaurant.category === 'object'
                ? restaurant.category.name
                : restaurant.category}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: '100%',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#2A2A2A',
    borderWidth: 1.5,
    backgroundColor: '#161616',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    borderTopColor: '#ff5f1f20',
    borderRightColor: '#2A2A2A',
    borderBottomColor: '#2A2A2A',
    borderLeftColor: '#2A2A2A',
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  restaurantName: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 6,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  deliveryTime: {
    color: '#aaa',
    fontSize: 13,
    fontFamily: 'Poppins-Light',
  },
  category: {
    color: '#aaa',
    fontSize: 13,
    fontFamily: 'Poppins-Light',
  },
});

export default RestaurantItem;
