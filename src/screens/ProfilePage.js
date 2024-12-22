import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ROUTE from '../Navigation/index';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

import { deleteToken, setToken } from '../api/storage';
import { useContext } from 'react';

import UserContext from '../context/UserContext';

const ProfilePage = () => {
  const { authenticated, setAuthenticated } = useContext(UserContext);

  const navigation = useNavigation();

  const [userInfo] = useState({
    name: 'Yousef Al Mesaeed',
    email: 'yousefalm@outlook.com',
    phone: '50215090',
    address: 'Jabriya, Kuwait',
    profileImage: 'https://avatars.githubusercontent.com/u/129464541?v=4',
  });

  const logout = () => {
    deleteToken();
    setAuthenticated(false);
  };

  const [orderStats] = useState({
    totalOrders: 47,
    favoriteRestaurants: 12,
    savedAddresses: 3,
    rewardPoints: 2850,
  });

  // Add animation value
  const [pressedButton] = useState(new Animated.Value(1));

  const onPressIn = () => {
    Animated.spring(pressedButton, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(pressedButton, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView style={styles.container}>
      {/* Premium Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.profileImageContainer}>
            <View style={styles.imageWrapper}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/474x/ef/41/fc/ef41fc502e20ee68d2f77b9300df31ff.jpg',
                }}
                style={styles.profileImage}
              />
            </View>
            <View style={styles.verifiedBadge}>
              <Icon name="verified" size={24} color="#FE5320" />
            </View>
          </View>
          <Text style={styles.userName}>{userInfo.name}</Text>
          <View style={styles.proMemberBadge}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.proMemberText}>Gold Member</Text>
          </View>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statsRow}>
          {[
            {
              icon: 'restaurant',
              value: orderStats.totalOrders,
              label: 'Orders',
            },
            {
              icon: 'favorite',
              value: orderStats.favoriteRestaurants,
              label: 'Favorites',
            },
            {
              icon: 'location-on',
              value: orderStats.savedAddresses,
              label: 'Locations',
              onPress: () => navigation.navigate(ROUTE.HOME.LOCATIONS),
            },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.statCard}
              onPress={item.onPress}
            >
              <Icon name={item.icon} size={24} color="#FE5320" />
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Profile Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Profile Details</Text>
        {[
          { icon: 'email', label: 'Email Address', value: userInfo.email },
          { icon: 'phone', label: 'Phone Number', value: userInfo.phone },
          {
            icon: 'location-on',
            label: 'Default Address',
            value: userInfo.address,
          },
        ].map((item, index) => (
          <Animated.View
            key={index}
            style={[
              styles.detailCard,
              { transform: [{ scale: pressedButton }] },
            ]}
          >
            <Icon name={item.icon} size={24} color="#FE5320" />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>{item.label}</Text>
              <Text style={styles.detailValue}>{item.value}</Text>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
            >
              <Icon name="edit" size={20} color="#666" />
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        {[
          {
            icon: 'receipt',
            title: 'Order History',
            onPress: () => navigation.navigate(ROUTE.HOME.ORDER_HISTORY),
          },
          {
            icon: 'card-giftcard',
            title: 'Rewards & Points',
            onPress: () => navigation.navigate(ROUTE.HOME.REWARDS),
          },
          {
            icon: 'payment',
            title: 'Payment Methods',
            onPress: () => navigation.navigate(ROUTE.HOME.PAYMENT_METHODS),
          },
          {
            icon: 'logout',
            title: 'Logout',
            onPress: () => logout(),
          },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.actionButton}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={item.onPress}
          >
            <Animated.View
              style={[
                styles.actionContent,
                { transform: [{ scale: pressedButton }] },
              ]}
            >
              <Icon name={item.icon} size={24} color="#fff" />
              <Text style={styles.actionText}>{item.title}</Text>
              <Icon
                name="chevron-right"
                size={24}
                color="#fff"
                style={styles.actionArrow}
              />
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },

  headerContainer: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#1A1A1A',
    paddingBottom: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  headerContent: {
    alignItems: 'center',
    paddingTop: 80,
  },

  profileImageContainer: {
    position: 'relative',
  },

  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgba(254, 83, 32, 0.8)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },

  profileImage: {
    width: '100%',
    height: '100%',
  },

  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 3,
    borderWidth: 1.5,
    borderColor: '#161616',
  },

  userName: {
    fontSize: 21,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    letterSpacing: 0.6,
    marginBottom: 4,
    marginTop: 12,
  },

  proMemberBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(254, 83, 32, 0.07)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 4,
    borderColor: 'rgba(254, 83, 32, 0.12)',
  },

  proMemberText: {
    color: '#FE5320',
    marginLeft: 4,
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },

  statsContainer: {
    padding: 16,
    paddingTop: 25,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  statCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    width: '30%',
    borderWidth: 1,
    borderColor: '#242424',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  statValue: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    marginTop: 8,
    letterSpacing: 0.4,
  },

  statLabel: {
    fontSize: 14,
    color: '#888888',
    marginTop: 4,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
    opacity: 0.9,
  },

  detailsContainer: {
    padding: 20,
    paddingTop: 5,
  },

  sectionTitle: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    marginBottom: 16,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    opacity: 0.9,
  },

  detailCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#242424',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  detailContent: {
    flex: 1,
    marginLeft: 15,
  },

  detailLabel: {
    fontSize: 11,
    color: '#888888',
    letterSpacing: 0.4,
    marginBottom: 4,
    textTransform: 'uppercase',
  },

  detailValue: {
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 0.3,
    lineHeight: 20,
  },

  editButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(102, 102, 102, 0.08)',
  },

  actionsContainer: {
    padding: 20,
    paddingBottom: 30,
  },

  actionButton: {
    marginBottom: 12,
  },

  actionContent: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#242424',
    marginBottom: 10,
  },

  actionText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginLeft: 12,
  },

  actionArrow: {
    marginLeft: 'auto',
  },

  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
});

export default ProfilePage;
