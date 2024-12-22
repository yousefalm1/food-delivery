import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Check,
  ChevronLeft,
  Clock,
  ListOrderedIcon,
  MapPin,
} from 'lucide-react-native';
import ROUTE from '../Navigation/index';
import { LinearGradient } from 'expo-linear-gradient';

const OrderConfirmation = () => {
  const navigation = useNavigation();
  const { orderId, total } = useRoute().params;

  return (
    <View style={styles.container}>
      {/* Success Animation Circle */}
      <View style={styles.successCircle}>
        <LinearGradient
          colors={['rgba(254, 83, 32, 0.2)', 'rgba(254, 83, 32, 0.1)']}
          style={styles.gradientCircle}
        >
          <View style={styles.checkCircle}>
            <Check size={40} color="#FE5320" strokeWidth={3} />
          </View>
        </LinearGradient>
      </View>

      {/* Success Message */}
      <Text style={styles.successTitle}>Order Placed!</Text>
      <Text style={styles.successMessage}>
        Your order has been successfully placed and will be delivered soon.
      </Text>

      {/* Order Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <View style={styles.iconContainer}>
            <ListOrderedIcon size={20} color="#FE5320" />
          </View>
          <Text style={styles.orderNumberValue}>#{orderId}</Text>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.iconContainer}>
            <Clock size={20} color="#FE5320" />
          </View>
          <View>
            <Text style={styles.detailLabel}>Estimated Delivery</Text>
            <Text style={styles.detailValue}>25-30 minutes</Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.iconContainer}>
            <MapPin size={20} color="#FE5320" />
          </View>
          <View>
            <Text style={styles.detailLabel}>Delivery Address</Text>
            <Text style={styles.detailValue}>1 Street, Jabriya</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.trackButton}
          onPress={() => navigation.navigate(ROUTE.HOME.ORDER_HISTORY)}
        >
          <Text style={styles.trackButtonText}>Track Order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: ROUTE.HOME.HOME }],
            })
          }
        >
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successCircle: {
    marginBottom: 30,
  },
  gradientCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(254, 83, 32, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successTitle: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    borderWidth: 0.5,
    borderColor: '#2A2A2A',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
    borderRadius: 12,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderNumberLabel: {
    color: '#FE5320',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  orderNumberValue: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  detailLabel: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 4,
  },
  detailValue: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  trackButton: {
    backgroundColor: '#FE5320',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  homeButton: {
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
  },
  homeButtonText: {
    color: '#FE5320',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});

export default OrderConfirmation;
