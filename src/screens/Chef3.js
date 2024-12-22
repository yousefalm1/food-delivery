import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ShoppingCart } from 'lucide-react-native';
import ROUTE from '../Navigation/index';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import dishesBetterImages from '../../assets/data/BetterImage';
import { Plus, Timer } from 'lucide-react-native';
import restaurants from '../../assets/data/restaurant';

const Chef3 = () => {
  const navigation = useNavigation();
  const { cart, addToCart } = useCart();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: '#161616' }}
    >
      <LinearGradient colors={['#161616', '#1E1E1E']} style={styles.container}>
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
                <Text
                  style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}
                >
                  {cart.length}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <Animated.View
          entering={FadeInDown.duration(800)}
          style={styles.profileWrapper}
        >
          <View style={styles.profileCard}>
            <LinearGradient
              colors={['#2A2A2A', '#232323']}
              style={styles.profileCardGradient}
            >
              <View style={styles.profileHeader}>
                <Image
                  source={{
                    uri: 'https://cdn.discordapp.com/avatars/196762661801689088/e230161d343386f728a57d7bca33477a.webp?size=160',
                  }}
                  style={styles.chefImage}
                />
                <View style={styles.headerText}>
                  <Text style={styles.chefName}>Chef Mshary</Text>
                  <Text style={styles.chefTitle}>Gamer Chef</Text>
                </View>
              </View>

              <Text style={styles.chefBio}>
                A gaming enthusiast and developer who brings his passion for
                video games into the kitchen. Creating game-inspired dishes
                while debugging code.
              </Text>

              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>12</Text>
                  <Text style={styles.statLabel}>Gaming Dishes</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>8+</Text>
                  <Text style={styles.statLabel}>Years Gaming</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>4.9</Text>
                  <Text style={styles.statLabel}>Rating</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.cardsContainer}>
            {[
              {
                image: 'Machboos',
                restaurantIndex: 4,
                menuItemIndex: 0,
                calories: 650,
              },
              {
                image: 'Kung Pao Chicken',
                restaurantIndex: 1,
                menuItemIndex: 0,
                calories: 450,
              },
              {
                image: 'Tiramisu',
                restaurantIndex: 0,
                menuItemIndex: 2,
                calories: 380,
              },
              {
                image: 'Beef Tacos',
                restaurantIndex: 2,
                menuItemIndex: 0,
                calories: 550,
              },
            ].map((dish, index) => (
              <View key={index} style={styles.dishCard}>
                <Image
                  source={dishesBetterImages[dish.image]}
                  style={{
                    width: dish.image === 'Butter Chicken' ? 100 : 80,
                    height: dish.image === 'Butter Chicken' ? 100 : 80,
                    borderRadius: 15,
                    alignSelf: 'center',
                    marginBottom: 10,
                  }}
                />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: '600',
                    marginBottom: 6,
                  }}
                >
                  {
                    restaurants[dish.restaurantIndex].menuItems[
                      dish.menuItemIndex
                    ].name
                  }
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <Timer size={16} color="#fff" strokeWidth={1.5} />
                    <Text
                      style={{ color: '#aaa', fontSize: 13, fontWeight: '300' }}
                    >
                      {restaurants[dish.restaurantIndex].deliveryTime}
                    </Text>
                  </View>
                  <View style={{}}>
                    <Text
                      style={{ color: '#aaa', fontSize: 13, fontWeight: '300' }}
                    >
                      | {dish.calories}cal
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}
                  >
                    KD{' '}
                    {
                      restaurants[dish.restaurantIndex].menuItems[
                        dish.menuItemIndex
                      ].price
                    }
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      addToCart(
                        restaurants[dish.restaurantIndex].menuItems[
                          dish.menuItemIndex
                        ],
                        1,
                        restaurants[dish.restaurantIndex].menuItems[
                          dish.menuItemIndex
                        ].price
                      )
                    }
                    style={{
                      backgroundColor: '#ff5f1f',
                      borderRadius: 100,
                      padding: 8,
                    }}
                  >
                    <Plus color="#fff" size={20} strokeWidth={1.5} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </Animated.View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Chef3;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  profileWrapper: {
    marginBottom: 20,
  },
  profileCard: {
    borderRadius: 16,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  profileCardGradient: {
    borderRadius: 16,
    padding: 15,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerText: {
    marginLeft: 15,
  },
  chefImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ff5f1f',
  },
  chefName: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.5,
  },
  chefTitle: {
    color: '#ff5f1f',
    fontSize: 16,
    marginTop: 4,
    letterSpacing: 0.5,
  },
  chefBio: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.9,
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#393939',
    paddingTop: 12,
    marginTop: 5,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#ff5f1f',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  statLabel: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    opacity: 0.9,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
    marginTop: 20,
  },
  dishCard: {
    borderRadius: 20,
    width: '47%',
    padding: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  },
});
