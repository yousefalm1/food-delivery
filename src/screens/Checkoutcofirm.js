import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCart, clearCart } from '../context/CartContext';

import { ChevronLeft, MapPin, Clock, CreditCard } from 'lucide-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ROUTE from '../Navigation/index';
import { LinearGradient } from 'expo-linear-gradient';

const addresses = [
  {
    id: 1,
    title: 'Home',
    address: '1 Street, Jabriya',
    type: 'home',
    isDefault: true,
  },
  {
    id: 2,
    title: 'Work',
    address: '2 Avenue, Salmiya',
    type: 'work',
    isDefault: false,
  },
  {
    id: 3,
    title: 'Gym',
    address: '3 Road, Kuwait City',
    type: 'other',
    isDefault: false,
  },
];

const CheckoutConfirm = () => {
  const navigation = useNavigation();
  const { cart, clearCart } = useCart();
  const [selectedAddress, setSelectedAddress] = React.useState(
    addresses.find((addr) => addr.isDefault) || addresses[0]
  );

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const fee = (subtotal * 0.05).toFixed(2);
  const total = subtotal + parseFloat(fee);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonStyle}
        >
          <ChevronLeft size={20} color="#FE5320" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirm Order</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Delivery Details */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Delivery Details</Text>

          {/* Address Selection */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {addresses.map((address) => (
              <TouchableOpacity
                key={address.id}
                style={[
                  styles.addressCard,
                  selectedAddress.id === address.id &&
                    styles.selectedAddressCard,
                ]}
                onPress={() => setSelectedAddress(address)}
              >
                <View style={styles.addressHeader}>
                  <View style={styles.titleContainer}>
                    <Icon
                      name={
                        address.type === 'home'
                          ? 'home'
                          : address.type === 'work'
                          ? 'business'
                          : 'place'
                      }
                      size={20}
                      color="#FE5320"
                    />
                    <Text style={styles.addressTitle}>{address.title}</Text>
                  </View>
                  {address.isDefault && (
                    <View style={styles.defaultBadge}>
                      <Icon name="check-circle" size={12} color="#4CAF50" />
                      <Text style={styles.defaultText}>Default</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.addressText}>{address.address}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.detailCard}>
            <Clock size={20} color="#FE5320" />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Estimated Time</Text>
              <Text style={styles.detailValue}>25-30 minutes</Text>
            </View>
          </View>
        </View>

        {/* Order Summary */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          {cart.map((item, index) => (
            <View key={index} style={styles.orderItem}>
              <View style={styles.itemInfo}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemQuantity}>x{item.quantity}</Text>
                </View>
              </View>
              <Text style={styles.itemPrice}>
                KD {(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        {/* Payment Method */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.detailCard}>
            <CreditCard size={20} color="#FE5320" />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Credit Card</Text>
              <Text style={styles.detailValue}>**** **** **** 4242</Text>
            </View>
          </View>
        </View>

        {/* Payment Summary */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Payment Summary</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>
                KD {Number(subtotal).toFixed(2)}
              </Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>
                KD {Number(fee).toFixed(2)}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>
                KD {Number(total).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          clearCart();
          navigation.reset({
            index: 0,
            routes: [
              {
                name: ROUTE.HOME.ORDER_CONFIRMATION,
                params: { orderId: '123456', total: total },
              },
            ],
          });
        }}
      >
        <Text style={styles.confirmButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 20,
  },
  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
  sectionContainer: {
    marginBottom: 25,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 15,
  },
  detailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#2A2A2A',
  },
  detailContent: {
    marginLeft: 15,
  },
  detailLabel: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: '400',
  },
  detailValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 2,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#2A2A2A',
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  itemName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  itemQuantity: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  itemPrice: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  summaryCard: {
    padding: 16,
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: '#2A2A2A',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    color: '#aaa',
    fontSize: 16,
    fontWeight: '400',
  },
  summaryValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    borderTopWidth: 0.2,
    borderColor: '#aaa',
    marginVertical: 10,
  },
  totalLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  totalValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  confirmButton: {
    backgroundColor: '#FE5320',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  addressCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    marginBottom: 12,
    borderWidth: 0.5,
    borderColor: '#2A2A2A',
    width: 200,
  },
  selectedAddressCard: {
    borderColor: '#FE5320',
    borderWidth: 1,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  addressTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  addressText: {
    color: '#aaa',
    fontSize: 14,
  },
  defaultBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  defaultText: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: '500',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default CheckoutConfirm;
