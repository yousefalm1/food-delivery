import React, { useRef } from 'react';
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

const RedeemRewards = () => {
  const navigation = useNavigation();
  const pressedButton = useRef(new Animated.Value(1)).current;

  const animateButton = (toValue) => {
    Animated.spring(pressedButton, {
      toValue,
      useNativeDriver: true,
      tension: 40,
      friction: 7,
    }).start();
  };

  return (
    <ScrollView style={styles.container}>
      {/* Points Summary Section */}
      <View style={styles.headerContainer}>
        <View
          style={{
            position: 'absolute',
            top: 65,
            left: 20,
            zIndex: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.buttonStyle}
          >
            <ChevronLeft size={20} color="#FE5320" strokeWidth={2} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContent}>
          <Icon name="stars" size={40} color="#FE5320" />
          <Text style={styles.pointsText}>2,850</Text>
          <Text style={styles.pointsLabel}>POINTS BALANCE</Text>
          <View style={styles.tierBadge}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.tierText}>Gold Member</Text>
          </View>
        </View>
      </View>

      {/* Rewards Categories */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Available Rewards</Text>

        {/* Reward Items */}
        {[
          {
            title: 'Free Delivery',
            points: 500,
            description: 'Get free delivery on your next order',
            icon: 'local-shipping',
          },
          {
            title: 'KD 3 Off',
            points: 1000,
            description: 'Discount on orders above ₹300',
            icon: 'local-offer',
          },
          {
            title: 'Premium Upgrade',
            points: 2500,
            description: '1 month of Premium membership',
            icon: 'star',
          },
          {
            title: 'Special Combo',
            points: 1500,
            description: 'Free combo meal at select restaurants',
            icon: 'restaurant',
          },
        ].map((reward, index) => (
          <TouchableOpacity
            key={index}
            onPressIn={() => animateButton(0.95)}
            onPressOut={() => animateButton(1)}
          >
            <Animated.View
              style={[
                styles.rewardCard,
                { transform: [{ scale: pressedButton }] },
              ]}
            >
              <View style={styles.rewardIcon}>
                <Icon name={reward.icon} size={24} color="#FE5320" />
              </View>
              <View style={styles.rewardContent}>
                <Text style={styles.rewardTitle}>{reward.title}</Text>
                <Text style={styles.rewardDescription}>
                  {reward.description}
                </Text>
              </View>
              <View style={styles.pointsContainer}>
                <Text style={styles.pointsRequired}>{reward.points}</Text>
                <Text style={styles.pointsLabel}>points</Text>
              </View>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>

      {/* History Section */}
      <View style={styles.historyContainer}>
        <Text style={styles.sectionTitle}>Points History</Text>
        {[
          {
            action: 'Order Completed',
            points: '+150',
            date: '2 days ago',
            icon: 'receipt',
          },
          {
            action: 'Redeemed Delivery',
            points: '-500',
            date: '1 week ago',
            icon: 'local-shipping',
          },
        ].map((item, index) => (
          <View key={index} style={styles.activityCard}>
            <Icon
              name={item.points.includes('+') ? 'add-circle' : 'remove-circle'}
              size={24}
              color={item.points.includes('+') ? '#4CAF50' : '#FE5320'}
            />
            <View style={styles.activityContent}>
              <Text style={styles.activityDescription}>{item.action}</Text>
              <Text style={styles.activityDate}>{item.date}</Text>
            </View>
            <Text
              style={[
                styles.activityPoints,
                { color: item.points.includes('+') ? '#4CAF50' : '#FE5320' },
              ]}
            >
              {item.points}
            </Text>
          </View>
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
    backgroundColor: '#1A1A1A',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingVertical: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    paddingTop: 70,
  },
  headerContent: {
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
  },
  pointsLabel: {
    fontSize: 14,
    color: '#888888',
    letterSpacing: 1,
    marginTop: 8,
  },
  tierBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(254, 83, 32, 0.07)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'rgba(254, 83, 32, 0.12)',
  },
  tierText: {
    color: '#FE5320',
    marginLeft: 4,
    fontSize: 13,
    fontWeight: '500',
  },
  categoriesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    opacity: 0.9,
  },
  rewardCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#242424',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rewardIcon: {
    padding: 10,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
    borderRadius: 12,
  },
  rewardContent: {
    flex: 1,
    marginLeft: 15,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  rewardDescription: {
    fontSize: 13,
    color: '#888888',
  },
  pointsContainer: {
    alignItems: 'center',
  },
  pointsRequired: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FE5320',
  },
  historyContainer: {
    padding: 20,
  },
  activityCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#242424',
    marginBottom: 12,
  },
  activityContent: {
    flex: 1,
    marginLeft: 12,
  },
  activityDescription: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 4,
  },
  activityDate: {
    color: '#888888',
    fontSize: 12,
  },
  activityPoints: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
});

export default RedeemRewards;
