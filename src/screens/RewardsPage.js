import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import ROUTE from '../Navigation';
// Separate mock data
const MOCK_REWARDS_DATA = {
  points: 2850,
  tier: 'Gold Member',
  nextTier: 'Platinum',
  pointsToNextTier: 1150,
  history: [
    {
      type: 'earned',
      amount: 150,
      description: 'Order from Spice Route',
      date: '2024-03-15',
    },
    {
      type: 'redeemed',
      amount: 500,
      description: 'Free Delivery Voucher',
      date: '2024-03-10',
    },
    {
      type: 'earned',
      amount: 200,
      description: 'Order from Taco Town',
      date: '2024-03-05',
    },
  ],
};

const QUICK_ACTIONS = [
  {
    icon: 'redeem',
    title: 'Redeem Rewards',
    accessibilityHint: 'Navigate to rewards redemption',
    screen: ROUTE.HOME.REDEEM_REWARDS,
  },
  {
    icon: 'local-offer',
    title: 'Available Offers',
    accessibilityHint: 'View current offers',
  },
  {
    icon: 'history',
    title: 'Points History',
    accessibilityHint: 'View points history',
  },
];

const RewardsPage = () => {
  const navigation = useNavigation();
  const [rewardsInfo, setRewardsInfo] = useState(MOCK_REWARDS_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use shared animated value for better performance
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      accessible={true}
      accessibilityLabel="Rewards page"
    >
      {isLoading ? (
        <ActivityIndicator size="large" color="#FE5320" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <>
          {/* Points Header Section */}
          <View style={styles.headerContainer}>
            <View
              style={{
                position: 'absolute',
                top: 65,
                left: 20,
                zIndex: 1,
              }}
            >
              {/* Back Button */}
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.buttonStyle}
              >
                <ChevronLeft size={20} color="#FE5320" />
              </TouchableOpacity>
            </View>
            <View style={styles.headerContent}>
              <Icon name="stars" size={40} color="#FE5320" />
              <Text style={styles.pointsText}>{rewardsInfo.points}</Text>
              <Text style={styles.pointsLabel}>POINTS BALANCE</Text>
              <View style={styles.tierBadge}>
                <Icon name="star" size={16} color="#FFD700" />
                <Text style={styles.tierText}>{rewardsInfo.tier}</Text>
              </View>
            </View>
          </View>

          {/* Progress to Next Tier */}
          <View style={styles.progressContainer}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>
                {rewardsInfo.pointsToNextTier} points to {rewardsInfo.nextTier}
              </Text>
              <Text style={styles.progressPercentage}>
                {Math.round((rewardsInfo.points / 4000) * 100)}%
              </Text>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarBackground}>
                <Animated.View
                  style={[
                    styles.progressBarFill,
                    { width: `${(rewardsInfo.points / 4000) * 100}%` },
                  ]}
                >
                  <View style={styles.progressGlow} />
                </Animated.View>
              </View>
              <View style={styles.progressLabels}>
                <Text style={styles.progressLabel}>Current Tier</Text>
                <Text style={styles.progressLabel}>{rewardsInfo.nextTier}</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={styles.actionsContainer}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            {QUICK_ACTIONS.map((item, index) => (
              <TouchableOpacity
                key={item.title}
                onPressIn={() => animateButton(0.95)}
                onPressOut={() => animateButton(1)}
                accessible={true}
                accessibilityLabel={item.title}
                accessibilityHint={item.accessibilityHint}
                onPress={() => {
                  if (item.screen) {
                    navigation.navigate(item.screen);
                  }
                }}
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

          {/* Recent Activity */}
          <View style={styles.activityContainer}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            {rewardsInfo.history.map((item, index) => (
              <View key={index} style={styles.activityCard}>
                <Icon
                  name={item.type === 'earned' ? 'add-circle' : 'remove-circle'}
                  size={24}
                  color={item.type === 'earned' ? '#4CAF50' : '#FE5320'}
                />
                <View style={styles.activityContent}>
                  <Text style={styles.activityDescription}>
                    {item.description}
                  </Text>
                  <Text style={styles.activityDate}>{item.date}</Text>
                </View>
                <Text
                  style={[
                    styles.activityPoints,
                    { color: item.type === 'earned' ? '#4CAF50' : '#FE5320' },
                  ]}
                >
                  {item.type === 'earned' ? '+' : '-'}
                  {item.amount}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}
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
    fontFamily: 'Poppins-Bold',
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
    fontFamily: 'Poppins-Medium',
  },
  progressContainer: {
    padding: 24,
    backgroundColor: '#1A1A1A',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.3,
  },
  progressPercentage: {
    color: '#FE5320',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.3,
  },
  progressBarContainer: {
    marginTop: 8,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#FE5320',
    borderRadius: 3,
    position: 'relative',
  },
  progressGlow: {
    position: 'absolute',
    top: -2,
    bottom: -2,
    left: -2,
    right: -2,
    backgroundColor: '#FE5320',
    opacity: 0.2,
    borderRadius: 4,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  progressLabel: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0.2,
  },
  actionsContainer: {
    padding: 20,
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
  actionContent: {
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
  activityContainer: {
    padding: 20,
    paddingBottom: 30,
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
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 12,
  },
  contentContainer: {
    flexGrow: 1,
  },
  errorText: {
    color: '#FE5320',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default RewardsPage;
