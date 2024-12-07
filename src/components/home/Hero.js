import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Hero = () => {
  return (
    <View
      style={{
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 20,
        paddingHorizontal: 30,
        backgroundColor: '#121212',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 25,
        },
        shadowOpacity: 1,
        shadowRadius: 45,
        elevation: 45,
        borderWidth: 0.5,
        borderColor: '#2A2A2A',

        marginTop: 15,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 20,
            fontWeight: '600',
            marginBottom: 3,
          }}
        >
          Taco Town on Yalla
        </Text>
        <Text
          style={{
            color: '#aaa',
            fontSize: 13,
            fontWeight: '300',
            marginBottom: 12,
          }}
        >
          Get KD0 Delivery Fees Reduced. Free Delivery on Orders Over KD 10
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 6,
            alignSelf: 'flex-start',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#FE5320',
                marginRight: 8,
              }}
            >
              Order Now
            </Text>
            <CircleArrowRight size={20} fill="#FE5320" color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: restaurants[2].image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 16,
          marginLeft: 20,
        }}
      />
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({});
