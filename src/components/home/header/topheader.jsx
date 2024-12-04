import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Heart, Navigation, User } from 'lucide-react-native';

const TopHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 20,
      }}
      r
    >
      <View>
        <Text
          style={{
            color: 'gray',
            fontWeight: 'light',
            fontSize: 14,
            marginBottom: 5,
          }}
        >
          Now
        </Text>
        <Text style={{ color: 'white' }}>
          <Navigation size={14} style={{ color: '#5e5e5e' }} fill="black" />{' '}
          Yousefs Home
        </Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        {/* <View
            style={{
              padding: 10,
              borderRadius: 100,
              backgroundColor: '#fefeff',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
            }}
          >
            <Heart style={{ color: '#f19b4a' }} fill="#f19b4a" size={24} />i
          </View> */}
        <View
          style={{
            padding: 10,
            borderRadius: 100,
            // backgroundColor: '#ff5f1f',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}
        >
          <User style={{ color: '#ff5f1f' }} size={20} fill="#ff5f1f" />
        </View>
      </View>
    </View>
  );
};

export default TopHeader;
