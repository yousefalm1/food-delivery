import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';
const OrderHistory = () => {
  const navigation = useNavigation();
  const orders = [
    {
      id: '1',
      restaurant: 'Wok Express',
      date: '5 Dec 2024',
      status: 'Delivered',
      total: 'KWD 15.750',
      items: 3,
    },
    {
      id: '2',
      restaurant: 'Taco Town',
      date: '8 Dec 2024',
      status: 'Delivered',
      total: 'KWD 22.500',
      items: 2,
    },
    {
      id: '3',
      restaurant: 'T-Grill',
      date: '9 Dec 2024',
      status: 'Processing',
      total: 'KWD 18.000',
      items: 4,
    },
    // Add more orders as needed
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return '#4CAF50';
      case 'Processing':
        return '#FFA000';
      case 'Cancelled':
        return '#F44336';
      default:
        return '#888888';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            position: 'absolute',
            top: 50,
            left: 20,
            zIndex: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.buttonStyle}
          >
            <ChevronLeft size={20} color="#FE5320" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Order History</Text>
        <Text style={styles.headerSubtitle}>{orders.length} Orders</Text>
      </View>

      {orders.map((order) => (
        <TouchableOpacity key={order.id} style={styles.orderCard}>
          <View style={styles.orderHeader}>
            <View style={styles.restaurantInfo}>
              <Icon name="restaurant" size={20} color="#FE5320" />
              <Text style={styles.restaurantName}>{order.restaurant}</Text>
            </View>
            <Text style={styles.orderDate}>{order.date}</Text>
          </View>

          <View style={styles.orderDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Order ID</Text>
              <Text style={styles.detailValue}>#{order.id}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Items</Text>
              <Text style={styles.detailValue}>{order.items}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Total</Text>
              <Text style={styles.detailValue}>{order.total}</Text>
            </View>
          </View>

          <View style={styles.orderFooter}>
            <View
              style={[
                styles.statusBadge,
                { backgroundColor: `${getStatusColor(order.status)}15` },
              ]}
            >
              <Text
                style={[
                  styles.statusText,
                  { color: getStatusColor(order.status) },
                ]}
              >
                {order.status}
              </Text>
            </View>
            <TouchableOpacity style={styles.reorderButton}>
              <Text style={styles.reorderText}>Reorder</Text>
              <Icon name="replay" size={16} color="#FE5320" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#1A1A1A',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#888888',
    letterSpacing: 0.3,
  },
  orderCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#242424',
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  restaurantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginLeft: 8,
  },
  orderDate: {
    color: '#888888',
    fontSize: 14,
  },
  orderDetails: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#242424',
    paddingVertical: 12,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    color: '#888888',
    fontSize: 14,
  },
  detailValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  reorderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  reorderText: {
    color: '#FE5320',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginRight: 4,
  },
});

export default OrderHistory;
