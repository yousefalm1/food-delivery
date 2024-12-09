import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ROUTE from '../Navigation/index';
import { ChevronLeft, MapPin, ShoppingCart } from 'lucide-react-native';
import { useCart } from '../context/CartContext';

const Categories = ({ route }) => {
  const { category, restaurants } = route.params;
  const navigation = useNavigation();

  const { cart } = useCart();
  return (
    <View
      style={{
        backgroundColor: '#161616',
        paddingHorizontal: 15,
        paddingTop: 50,
        flex: 1,
      }}
    >
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}
      >
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonStyle}
        >
          <ChevronLeft size={20} color={'white'} />
        </TouchableOpacity>

        {/* Cart Button */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TabNavigator', { screen: ROUTE.HOME.CART })
          }
          style={styles.buttonStyle}
        >
          <ShoppingCart size={20} color="#fff" strokeWidth={2} />
          {cart.length > 0 && (
            <View
              style={{
                position: 'absolute',
                right: -6,
                top: -6,
                backgroundColor: '#fff',
                borderRadius: 12,
                minWidth: 22,
                height: 22,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: '#ff5f1f',
              }}
            >
              <Text
                style={{ color: '#ff5f1f', fontSize: 11, fontWeight: 'bold' }}
              >
                {cart.length}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{category.categoryName} Restaurants</Text>

      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTE.HOME.MENU, {
                restaurant: item,
                category: category,
              })
            }
            key={item.name}
            style={styles.restaurantCard}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <View style={styles.detailsContainer}>
                <Text style={styles.deliveryFee}>Free Delivery</Text>
                <Text style={styles.category}>· {item.deliveryTime}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  restaurantCard: {
    backgroundColor: '#222222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ff5f1f',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
  },
  deliveryFee: {
    color: '#ff5f1f',
    fontWeight: '500',
    fontSize: 12,
  },
  category: {
    color: '#a0a0a0',
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 8,
  },
});
