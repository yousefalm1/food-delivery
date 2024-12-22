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
import {
  ChevronLeft,
  MapPin,
  ShoppingCart,
  Star,
  Timer,
} from 'lucide-react-native';
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
          <ChevronLeft size={20} color="#FE5320" />
        </TouchableOpacity>

        {/* Cart Button */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TabNavigator', { screen: ROUTE.HOME.CART })
          }
          style={styles.buttonStyle}
        >
          <ShoppingCart size={20} color="#FE5320" strokeWidth={2} />
          {cart.length > 0 && (
            <View
              style={{
                position: 'absolute',
                right: -6,
                top: -6,
                backgroundColor: '#FE5320',
                borderRadius: 12,
                minWidth: 18,
                height: 18,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1.5,
                borderColor: '#161616',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>
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
            style={styles.container}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.contentContainer}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <View style={styles.detailsContainer}>
                <View style={styles.timeContainer}>
                  <Timer size={16} color="#ff5f1f" strokeWidth={1.5} />
                  <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
                </View>
                <Star size={16} color="#ff5f1f" strokeWidth={1.5} />
                <Text style={styles.category}> {item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default Categories;

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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  restaurantName: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 6,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 10,
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
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginVertical: 20,
  },
  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
});
