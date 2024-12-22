import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';

const PaymentMethods = () => {
  const navigation = useNavigation();
  const [pressedButton] = useState(new Animated.Value(1));

  const [paymentMethods] = useState([
    {
      id: 1,
      type: 'credit-card',
      name: 'Visa ending in 4242',
      expiryDate: '12/25',
      isDefault: true,
    },
    {
      id: 2,
      type: 'credit-card',
      name: 'Mastercard ending in 8790',
      expiryDate: '09/24',
      isDefault: false,
    },
  ]);

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
      {/* Header Section */}
      <View style={styles.headerContainer}>
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
        <Text style={styles.headerTitle}>Payment Methods</Text>
        <Text style={styles.headerSubtitle}>
          Manage your payment methods and preferences
        </Text>
      </View>

      {/* Payment Methods List */}
      <View style={styles.methodsContainer}>
        <Text style={styles.sectionTitle}>Saved Cards</Text>
        {paymentMethods.map((method, index) => (
          <Animated.View
            key={method.id}
            style={[
              styles.cardItem,
              { transform: [{ scale: pressedButton }] },
              method.isDefault && styles.defaultCardItem,
            ]}
          >
            <Icon name="credit-card" size={24} color="#FE5320" />
            <View style={styles.cardDetails}>
              <Text style={styles.cardName}>{method.name}</Text>
              <Text style={styles.cardExpiry}>Expires {method.expiryDate}</Text>
            </View>
            {method.isDefault && (
              <View style={styles.defaultBadge}>
                <Text style={styles.defaultText}>Default</Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.editButton}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
            >
              <Icon name="more-vert" size={20} color="#888" />
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        {[
          {
            icon: 'add-circle-outline',
            title: 'Add New Card',
            onPress: () => {},
          },
          {
            icon: 'account-balance-wallet',
            title: 'Manage Digital Wallet',
            onPress: () => {},
          },
          {
            icon: 'history',
            title: 'Payment History',
            onPress: () => {},
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
  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  headerContainer: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 16,
  },
  methodsContainer: {
    padding: 20,
    paddingTop: 32,
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
  cardItem: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#242424',
  },
  defaultCardItem: {
    borderColor: 'rgba(254, 83, 32, 0.3)',
    backgroundColor: 'rgba(254, 83, 32, 0.03)',
  },
  cardDetails: {
    flex: 1,
    marginLeft: 15,
  },
  cardName: {
    fontSize: 15,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
  },
  cardExpiry: {
    fontSize: 13,
    color: '#888888',
  },
  defaultBadge: {
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 12,
  },
  defaultText: {
    color: '#FE5320',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  editButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(102, 102, 102, 0.08)',
  },
  actionsContainer: {
    padding: 20,
    paddingBottom: 32,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginLeft: 12,
    letterSpacing: 0.3,
  },
  actionArrow: {
    marginLeft: 'auto',
  },
});

export default PaymentMethods;
